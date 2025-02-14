const cards = document.getElementById('cards');
const fact = document.getElementById('fact');
const searchInput = document.getElementById('searchPokemon');
const nextBtn = document.getElementById('nextPage');
const prevBtn = document.getElementById('prevPage');
const pageNumberText = document.getElementById('pageNumber');
let pageNumber = 1;

let nextPage = "https://pokeapi.co/api/v2/pokemon";
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

            // Fetch all Pokémon details, then sort by ID
            Promise.all(data.results.map(pokemon => fetchPokemonDetails(pokemon)))
                .then(() => {
                    // Sort by ID before displaying
                    allPokemon.sort((a, b) => a.id - b.id);
                    allPokemon.forEach(pokemon => cards.appendChild(pokemon.element));
                });
        })
        .catch(error => console.error("Error fetching Pokémon list:", error));

    }
    
    
    function fetchPokemonDetails(pokemon) {
        return fetch(pokemon.url)
        .then(response => response.json())
        .then(data => {
            let newCard = document.createElement('div');
            newCard.classList.add("card");
            
            let img = document.createElement("img");
            img.src = "https://placehold.co/200?text=Loading...";
            img.alt = data.name;
            
            let realImage = new Image();
            realImage.src = data.sprites.front_default || "https://placehold.co/200?text=No+Image";
            realImage.onload = function () {
                img.src = realImage.src;
            };
            
            newCard.innerHTML = `
            <div class="information">
                    <h2 class="pokeName">${data.name.toUpperCase()}</h2>
                    <h3 class="pokeType">${data.types.map(t => t.type.name).join(", ")}</h3>
                    <p class="desc">Height: ${data.height} | Weight: ${data.weight}</p>
                    <p>ID: ${data.id}</p>
                    </div>`;
                    
                    newCard.prepend(img);

            // Store in array for sorting later
            allPokemon.push({ element: newCard, name: data.name.toLowerCase(), id: data.id });
        })
        .catch(error => console.error("Error fetching Pokémon details:", error));
        
    }
    
    
    // Pagination controls
    nextBtn.addEventListener("click", () => {
        if (nextPage) fetchPokemonList(nextPage);
        searchInput.ariaPlaceholder = "Search Pokemon from this page";
        pageNumber++;
        pageNumberText.textContent = `Page ${pageNumber} of 63`;
    });
    
    prevBtn.addEventListener("click", () => {
        if (prevPage) fetchPokemonList(prevPage);
        pageNumber--;
        pageNumberText.textContent = `Page ${pageNumber} of 63`;
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
