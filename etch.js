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
    px = document.querySelector('#pxlSize').value;
    if(px < 2 || px > 25) {
        alert('Choose a number between 2-25');
    } else {    
        pxlDensity = px;
        etchBox.style.gridTemplateColumns = `repeat(${pxlDensity}, 1fr)`;
        etchBox.style.gridTemplateRows = `repeat(${pxlDensity}, 1fr)`;
        etchBox.innerHTML = '';
        createPixel();
        pixel = [...document.querySelectorAll('.pixel')];
        pixel.forEach(pix => {
            pix.addEventListener('mouseover', changeColor);
        });
    }

};

function changeColor() {
    if (mouseDown === true) {
    document.querySelector(`#${this.id}`).classList.remove('clr0');
    document.querySelector(`#${this.id}`).classList.add('clr1');
    };
    document.querySelector(`#${this.id}`).onmousedown = function changeContent() {
        document.querySelector(`#${this.id}`).classList.remove('clr0');
        document.querySelector(`#${this.id}`).classList.add('clr1');
    }
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

document.querySelector('#confirm').addEventListener('click', changePxl)