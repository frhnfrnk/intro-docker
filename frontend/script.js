// Fetch the name from backend
fetch("http://localhost:3000/api/name")
  .then((response) => response.json())
  .then((data) => {
    // Display the welcome message with the name from backend
    document.getElementById("welcomeText").innerText = `Welcome, ${data.name}`;
  })
  .catch((error) => {
    console.error("Error fetching name:", error);
    document.getElementById("welcomeText").innerText = "Error loading name.";
  });
