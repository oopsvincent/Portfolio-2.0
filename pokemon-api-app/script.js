const cards = document.getElementById('cards');
const fact = document.getElementById('fact');
const searchInput = document.getElementById('searchPokemon');
const nextBtn = document.getElementById('nextPage');
const prevBtn = document.getElementById('prevPage');

let nextPage = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
let prevPage = null;
let allPokemon = [];

function fetchPokemonList(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            fact.innerHTML = `There are a total of ${data.count} Pokémon.`;

            nextPage = data.next;
            prevPage = data.previous;
            
            prevBtn.disabled = !prevPage;
            nextBtn.disabled = !nextPage;

            cards.innerHTML = ""; // Clear previous results
            allPokemon = [];

            data.results.forEach(pokemon => fetchPokemonDetails(pokemon));
        })
        .catch(error => console.error("Error fetching Pokémon list:", error));
}

function fetchPokemonDetails(pokemon) {
    fetch(pokemon.url)
        .then(response => response.json())
        .then(data => {
            let newCard = document.createElement('div');
            newCard.classList.add("card");

            let img = document.createElement("img");
img.src = "https://placehold.co/200?text=Loading...";
img.alt = data.name;

// Preload the real image first
let realImage = new Image();
realImage.src = data.sprites.front_default || "https://placehold.co/200?text=No+Image";
realImage.onload = function () {
    img.src = realImage.src; // Replace placeholder only when real image loads
};



            newCard.innerHTML = `
                <div class="information">
                    <h2 class="pokeName">${data.name.toUpperCase()}</h2>
                    <h3 class="pokeType">${data.types.map(t => t.type.name).join(", ")}</h3>
                    <p class="desc">Height: ${data.height} | Weight: ${data.weight}</p>
                    <p>ID: ${data.id}</p>
                </div>`;

            newCard.prepend(img);
            cards.append(newCard);

            allPokemon.push({ element: newCard, name: data.name.toLowerCase() });
        })
        .catch(error => console.error("Error fetching Pokémon details:", error));
}

// Pagination controls
nextBtn.addEventListener("click", () => {
    if (nextPage) fetchPokemonList(nextPage);
    searchInput.ariaPlaceholder = "Search Pokemon from this page";
});

prevBtn.addEventListener("click", () => {
    if (prevPage) fetchPokemonList(prevPage);
});

// Search functionality
searchInput.addEventListener("input", (event) => {
    let searchText = event.target.value.toLowerCase();

    allPokemon.forEach(pokemon => {
        if (pokemon.name.includes(searchText)) {
            pokemon.element.style.order = -1; // Move to the top
            pokemon.element.style.display = "block"; // Ensure it's visible
        } else {
            pokemon.element.style.order = "";
            pokemon.element.style.display = "none"; // Hide non-matching Pokémon
        }
    });
});


// Load first page on startup
fetchPokemonList(nextPage);
