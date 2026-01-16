// Your provided API Key
const API_KEY = "Vs8qWhQaAaze0YMv06eNveAgrU7jpUJQ"; 

const searchBtn = document.getElementById("search-btn");
const gifDisplay = document.getElementById("gif-display");
const userInput = document.getElementById("user-input");

searchBtn.addEventListener("click", async () => {
    const query = userInput.value.trim();
    
    if (query === "") {
        alert("Please enter a keyword first!");
        return;
    }

    // Giphy Search Endpoint
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=12&rating=g`;

    try {
        // Show a loading state
        gifDisplay.innerHTML = "<p>Searching for GIFs...</p>";

        const response = await fetch(url);
        const content = await response.json();
        
        // Clear the loading text
        gifDisplay.innerHTML = ""; 

        // Check if results were found
        if (content.data.length === 0) {
            gifDisplay.innerHTML = "<p>No GIFs found for that search. Try something else!</p>";
            return;
        }

        // Loop through the results and create images
        content.data.forEach(item => {
            const img = document.createElement("img");
            // 'fixed_height' keeps the grid looking neat
            img.src = item.images.fixed_height.url; 
            img.alt = item.title;
            img.classList.add("gif-item"); // Useful for specific CSS styling
            gifDisplay.appendChild(img);
        });

    } catch (err) {
        console.error("Connection Error:", err);
        gifDisplay.innerHTML = "<p>Something went wrong. Please check your connection.</p>";
    }
});

// Optional: Allow pressing "Enter" to search
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});