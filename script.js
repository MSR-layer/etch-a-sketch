/**
 * TO-DO:
 * add clear button [x]
 * add slider for number of cells per side []
 * add rainbow option [x]
 */


function initialize()
{
    let columns = prompt("how many rows and columns?");

    while(columns >= 100 && columns <= 0 )
        columns = prompt("please enter valid value between 0 and 100");


    let container = document.getElementById('grid');

    container.style.gridTemplateColumns = `repeat(${columns},1fr)`;

    for(let j=0;j<columns*columns;j++){
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

function switchPalette(){
    if(this.id === 'rainbow'){
        divList.forEach(div => div.removeEventListener('mouseover', mono));
        divList.forEach(div => div.addEventListener('mouseover', rainbow));
    }else{
        divList.forEach(div => div.removeEventListener('mouseover', rainbow));
        divList.forEach(div => div.addEventListener('mouseover', mono));
    }
}

initialize();

const clearButton = document.getElementById('clear');
const rainbowButton = document.getElementById('rainbow');
const monoButton = document.getElementById('monochrome');



const divList = Array.from(document.querySelectorAll('.grid-cell'));

divList.forEach(div => div.addEventListener('mouseover', mono));

clearButton.addEventListener('click', clear);
rainbowButton.addEventListener('click', switchPalette);
monoButton.addEventListener('click', switchPalette);