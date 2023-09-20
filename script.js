const gridButton = document.getElementById("row-count");
const rowCountValue = document.getElementById("rowCountValue");

//Selection of color
const colorPicker = document.getElementById("color-picker");   

function createGrid() {
    const rowCount = parseInt(gridButton.value);
    rowCountValue.textContent = rowCount; // Update displayed value

    const gridContainer = document.getElementById('grid');
    gridContainer.innerHTML = ''; // Clears the existing content inside the gridContainer at every re-generation

    // Calculate the size of each grid item based on the number of divs in a row
    const gridSize = 750; // This value can be adjusted if needed
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


    gridButton.addEventListener('input', createGrid);


    //Selecting all grid items to change their colors as they are hovered over
    const gridItems = document.querySelectorAll('.grid-item');

    function changeColorOnHover(event) {
        event.target.style.backgroundColor = colorPicker.value;
    }

    gridItems.forEach((item) => {
        item.addEventListener('mouseenter', changeColorOnHover);
    });

}

// Initial grid creation
createGrid();

