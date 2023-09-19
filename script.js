const gridButton = document.getElementById("row-count");
const rowCountValue = document.getElementById("rowCountValue");

function createGrid() {
    const rowCount = parseInt(gridButton.value);
    rowCountValue.textContent = rowCount; // Update displayed value

    const gridContainer = document.getElementById('grid');
    gridContainer.innerHTML = '';

    // Calculate the size of each grid item based on the number of divs in a row
    const gridSize = 750; // You can adjust this value as needed
    const itemSize = gridSize / rowCount;

    // Set the grid container's columns and rows
    gridContainer.style.gridTemplateColumns = "repeat("+rowCount+", 1fr)";
    gridContainer.style.gridTemplateRows = "repeat("+rowCount+", 1fr)";

    // Create grid items
    for (let i = 0; i < rowCount * rowCount; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = itemSize + "px";
        gridItem.style.height = itemSize + "px";
        gridContainer.appendChild(gridItem);
    }
}

// Initial grid creation
createGrid();

gridButton.addEventListener('input', createGrid); // Listen for input event on the slider
