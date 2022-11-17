function makeGrid(size = 16) {
    const container = document.querySelector('div.container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let child;
    const childFlexBasis = 1/size * 100;
    for (let i = 0; i < (size * size); i++) {
        child = document.createElement('div');
        child.setAttribute('class', 'box');
        child.setAttribute('style', `background-color: rgb(255, 255, 255); flex-basis: ${childFlexBasis}%;`);
        container.appendChild(child);
    }
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            if (start) {
                const brushColor = document.querySelector('input[name=brush-type]:checked');
                if (brushColor.value === 'normal') {
                    box.style.backgroundColor = 'rgb(0, 0, 0)';
                } else if (brushColor.value === 'extra') {
                    let boxColors = box.style.backgroundColor.slice(4).split(', ').map((x) => parseInt(x));
                    if (boxColors[0] !== 0 || boxColors[1] !== 0 || boxColors[2] !== 0) {
                        if (boxColors[0] === 255 && boxColors[1] === 255 && boxColors[2] === 255) {
                            boxColors = boxColors.map((x) => Math.floor(Math.random() * 256));
                        } else {
                            boxColors = boxColors.map((x) => x - 26);
                        }
                        if (boxColors[0] < 0) boxColors[0] = 0;
                        if (boxColors[1] < 0) boxColors[1] = 0;
                        if (boxColors[2] < 0) boxColors[2] = 0;
                        box.style.backgroundColor = `rgb(${boxColors.join(', ')})`;
                    }
                }
            }
        });
    });
}

let start = false;
document.addEventListener("mousedown", () => start = true);
document.addEventListener("mouseup", () => start = false);
makeGrid();

const resetButton = document.querySelector('button#reset');
resetButton.addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.style.backgroundColor = 'rgb(255, 255, 255)';
    });
});

const gridButton = document.querySelector('button#changegrid');
gridButton.addEventListener('click', () => {
    let newSize;
    while (true) {
        newSize = prompt('Input the new grid row/column size.\nPlease use a number between 1 and 100:');
        if (newSize === null) break; // Cancel button
        newSize = parseInt(newSize);
        if (!isNaN(newSize) && newSize <= 100 && newSize >= 1) {
            makeGrid(newSize);
            break;
        }
    }
});