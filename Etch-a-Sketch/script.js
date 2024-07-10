const container = document.getElementById("grid-container");
const resetButton = document.getElementById("reset-button");

// Function to create grid
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    
    // Remove existing grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    // Create new grid
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.className = "grid-item";
        let lightness = 90; // Initial lightness (100 = white)
        cell.addEventListener("mouseenter", () => {
            if (lightness >= 0) {
                cell.style.backgroundColor = `hsl(0, 0%, ${lightness}%)`;
                lightness -= 10; // Decrease lightness by 10% on each interaction
            }
        });
        container.appendChild(cell);
    }
}
// Event listener for the reset button
resetButton.addEventListener("click", () => {
    let size = prompt("Enter the number of squares per side for the new grid (limit of 100):");
    size = parseInt(size);
    if (!isNaN(size) && size > 0 && size <= 100) {
        makeRows(size, size);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

// Initial grid
makeRows(16, 16);
