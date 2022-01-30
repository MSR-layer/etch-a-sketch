/**
 * TO-DO:
 * add clear button [x]
 * add slider for number of cells per side []
 * add rainbow option [x]
 * add eraser [x]
 * add color picker[x]
 * fix css[]
 */

const DEFAULT_AMOUNT = 50;

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function initialize(amount)
{
    // let columns = prompt("how many rows and columns?");

    // while(columns >= 100 && columns <= 0 )
    //     columns = prompt("please enter valid value between 0 and 100");


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
    this.style.backgroundColor = 'black';
}

function clear(){
    divList.forEach(div => div.style.backgroundColor = 'white');
}

function randomColorGenerator(){
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randomColor = randomNumber.padStart(6,0);
    console.log(randomColor);
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
    this.style.backgroundColor = 'white';
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

    palette = this.id;
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



output.textContent = slider.value;



slider.oninput = function(){
    output.textContent = this.value;
    initialize(this.value);
    divList = Array.from(document.querySelectorAll('.grid-cell'));
    divList.forEach(div => div.addEventListener('mouseover', mono));
};


let divList = Array.from(document.querySelectorAll('.grid-cell'));

divList.forEach(div => div.addEventListener('mouseover', mono));

let palette = 'monochrome';

clearButton.addEventListener('click', clear);

eraserButton.addEventListener('click', sketch);

colorButton.addEventListener('click', sketch);

rainbowButton.addEventListener('click', sketch);

monoButton.addEventListener('click', sketch);
