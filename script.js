// JavaScript to dynamically generate grid items
const gridContainer = document.getElementById('gridContainer');
const numColumns = 4; // Adjust the number of columns as needed
const numRows = 4; // Adjust the number of rows as needed

for (let i = 0; i < numColumns * numRows; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
}
