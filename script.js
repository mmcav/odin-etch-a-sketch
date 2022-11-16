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
        box.addEventListener('mouseover', gridPaint);
    });
}

function gridPaint() {
    /*const currentColor = parseInt(this.style.backgroundColor.split(', ')[1]);
    if (currentColor < 26) {
        this.style.backgroundColor = 'rgb(0, 0, 0)';
    } else {
        this.style.backgroundColor = `rgb(${currentColor - 26}, ${currentColor - 26}, ${currentColor - 26})`;
    }*/
    this.style.backgroundColor = 'rgb(0, 0, 0)';
}

makeGrid()

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