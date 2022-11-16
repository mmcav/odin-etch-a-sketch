function makeGrid(size = 16) {
    const container = document.querySelector('div.container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let child;
    const childFlexBasis = 1/size * 100;
    for (let i = 0; i < (size * size); i++) {
        child = document.createElement('div');
        child.setAttribute('id', `element${i}`);
        child.setAttribute('class', 'box');
        child.setAttribute('style', `flex-basis: ${childFlexBasis}%`);
        container.appendChild(child);
    }
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
        if (newSize === null) break;
        newSize = parseInt(newSize);
        if (!isNaN(newSize) && newSize <= 100 && newSize >= 1) {
            makeGrid(newSize);
            break;
        }
    }
});