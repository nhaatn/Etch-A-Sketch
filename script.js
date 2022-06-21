const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    // console.log(container);
    // console.log(rows);
    // console.log(cols);

    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        //cell.innerText = (i + 1);   // Label the cell by numbers || DELETE LATER
        container.appendChild(cell).className = 'grid-item';

        // When hovering on a "cell" the cell will turn black
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
            console.log(cell);
        })
    };
};

makeRows(16,16);