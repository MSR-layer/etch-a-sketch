/**
 * TO-DO:
 * add clear button [x]
 * add slider for number of cells per side [x]
 * add rainbow option [x]
 * add eraser [x]
 * add color picker[x]
 * fix css[]
 */

const DEFAULT_AMOUNT = 50;
const DEFAULT_BACKGROUND_COLOR = '#FBF8F1';
const DEFAULT_COLOR = '#3d231e';

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function initialize(amount)
{
    let container = document.getElementById('grid');

    if(container.firstChild)
        removeAllChildNodes(container);

    container.style.gridTemplateColumns = `repeat(${amount},1fr)`;

    for(let j=0;j<amount*amount;j++){
        let cell = document.createElement('div');
        cell.classList.add('grid-cell');
        container.append(cell);
    }

}

function mono(){
    //this.style.backgroundColor = 'black';
    this.style.backgroundColor = '#3d231e';
}

function clear(){
    divList.forEach(div => div.style.backgroundColor = DEFAULT_BACKGROUND_COLOR);
}

function randomColorGenerator(){
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randomColor = randomNumber.padStart(6,0);
    return `#${randomColor}`;
}

function rainbow(){
    this.style.backgroundColor = `${randomColorGenerator()}`;
}

function color(){
    colorInput = document.getElementById('color-input');
    this.style.backgroundColor = `${colorInput.value}`;
}

function eraser(){
    this.style.backgroundColor = DEFAULT_BACKGROUND_COLOR;
}

function sketch(){
    if(palette === 'monochrome')
        divList.forEach(div => div.removeEventListener('mouseover', mono));
    else if(palette === 'rainbow')
        divList.forEach(div => div.removeEventListener('mouseover', rainbow));
    else if(palette === 'color-input')
        divList.forEach(div => div.removeEventListener('mouseover', color));
    else if(palette === 'eraser')
        divList.forEach(div => div.removeEventListener('mouseover', eraser));

    document.querySelector(`#${palette}`).classList.remove('selected');
    
    palette = this.id;

    this.classList.add('selected');

    if(this.id === 'monochrome'){
        divList.forEach(div => div.addEventListener('mouseover', mono));
    }else if(this.id === 'rainbow'){
        divList.forEach(div => div.addEventListener('mouseover', rainbow));
    }else if(this.id === 'color-input'){
        divList.forEach(div => div.addEventListener('mouseover', color));
    }else if(this.id === 'eraser'){
        divList.forEach(div => div.addEventListener('mouseover', eraser));
    }
}

initialize(DEFAULT_AMOUNT);

const clearButton = document.getElementById('clear');
const rainbowButton = document.getElementById('rainbow');
const monoButton = document.getElementById('monochrome');
const eraserButton = document.getElementById('eraser');
const colorButton = document.getElementById('color-input');

const slider = document.getElementById('slider');

let output = document.getElementById('output');



output.textContent = `${slider.value} × ${slider.value}`;



slider.oninput = function(){
    output.textContent = `${this.value} × ${this.value}`;
    initialize(this.value);
    divList = Array.from(document.querySelectorAll('.grid-cell'));
    divList.forEach(div => div.addEventListener('mouseover', mono));
};

function changeButtonColor(){
    this.style.backgroundColor = 'black';
}


let divList = Array.from(document.querySelectorAll('.grid-cell'));

divList.forEach(div => div.addEventListener('mouseover', mono));

let palette = 'monochrome';

clearButton.addEventListener('click', clear);

eraserButton.addEventListener('click', sketch);

colorButton.addEventListener('click', sketch);

rainbowButton.addEventListener('click', sketch);

monoButton.addEventListener('click', sketch);
