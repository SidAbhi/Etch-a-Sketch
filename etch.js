const etchBox = document.querySelector('.etch');
let mouseDown = false;
let pxlDensity = 16;

function createPixel() {
    etchBox.innerHTML = ''
    for(let i = 0; i < (pxlDensity * pxlDensity); i++) {
        etchBox.innerHTML = etchBox.innerHTML + `<div class="pixel clr0" id="pix${i}"></div>\n`
    };
};

createPixel();

let pixel = [...document.querySelectorAll('.pixel')];

function reset() {
    pixel.forEach(pix => {
        pix.classList.remove('clr1');
        pix.classList.add('clr0');
    });
};

function changePxl(px) {
    pxlDensity = px;
    etchBox.style.gridTemplateColumns = `repeat(${pxlDensity}, 1fr)`;
    etchBox.style.gridTemplateRows = `repeat(${pxlDensity}, 1fr)`;
    etchBox.innerHTML = '';
    createPixel();
    pixel = [...document.querySelectorAll('.pixel')];
    pixel.forEach(pix => {
        pix.addEventListener('mouseover', changeColor);
    });
};

function changeColor() {
    if (mouseDown === true) {
    document.querySelector(`#${this.id}`).classList.remove('clr0');
    document.querySelector(`#${this.id}`).classList.add('clr1');
    console.log(document.querySelector(`#${this.id}`));
    };
};

window.addEventListener('mousedown', () => {
    mouseDown = true;
});

window.addEventListener('mouseup', () => {
mouseDown = false;
});

pixel.forEach(pix => {
    pix.addEventListener('mouseover', changeColor);
});

document.querySelector('#reset').addEventListener('click', reset);