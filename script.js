const container = document.getElementById("container");
// let cell = document.createElement("div");

// 
// CREATE THE INITIAL GRID 16 X 16
// 
function createGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);

    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
      };
};


// 
// Change the color when hover
// 
function changeColor(target) {
    target.style.backgroundColor = 'forestgreen';
}

container.addEventListener('mouseover', (e) => {
    target = e.target;

    if (target.matches('div.grid-item')) {
        changeColor(target);
    };
});


// 
// Create a prompt asking for the num of squares for the grid
// 
function propmtGrid() {
    let userInput = prompt('Enter grid size between 1-50', 50);
    
    if (userInput >= 1 && userInput <= 50) {
        createGrid(userInput, userInput);
    } else {
        do {
            userInput = prompt('Invalid size! Enter grid size between 1-50');
        }
        while(userInput < 1 || userInput > 50);
        createGrid(userInput, userInput);
    }
}


// 
// Reset the project
// 
const reset = document.querySelector('#resetBtn');
reset.addEventListener('click', () => {
    window.location.reload();
});

propmtGrid();