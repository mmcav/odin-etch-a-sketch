const size = 16 * 16;
const container = document.querySelector('div.container');
let child;
for (let i = 0; i < size; i++) {
    child = document.createElement('div');
    child.setAttribute('id', `element${i}`);
    child.setAttribute('class', 'box');
    container.appendChild(child);
}

const resetButton = document.querySelector('button#reset');
resetButton.addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.style.backgroundColor = 'white';
    });
});

const gridButton = document.querySelector('button#changegrid');
gridButton.addEventListener('click', () => {
    alert('placeholder message');
});