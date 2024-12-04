const fetchUserButton = document.getElementById("fetchUser");
const userName = document.getElementById("userName");
const userGender = document.getElementById("userGender");
const userLocation = document.getElementById("userLocation");
const userEmail = document.getElementById("userEmail");
const userPhone = document.getElementById("userPhone");
const userImage = document.getElementById("userImage");

// Fetch user data from the API
async function fetchUserData() {
  const apiURL = "https://api.randomuser.me/";

  try {
    const response = await fetch(apiURL); // Fetch data
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    const data = await response.json(); // Parse JSON
    const user = data.results[0]; // Get the first user

    // Populate the data on the page
    userName.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
    userGender.textContent = user.gender;
    userLocation.textContent = `${user.location.city}, ${user.location.state}, ${user.location.country}`;
    userEmail.textContent = user.email;
    userPhone.textContent = user.phone;
    userImage.src = user.picture.large;
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to fetch user data. Please try again.");
  }
}

// Add event listener to the button
fetchUserButton.addEventListener("click", fetchUserData);
