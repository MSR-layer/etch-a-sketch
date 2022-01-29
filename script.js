/**
 * TO-DO:
 * add clear button []
 * add slider for number of cells per side []
 * add rainbow option []
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

function onHover(){
    this.style.backgroundColor = 'black';
}

function clear(){
    console.log('clea');
    divList.forEach(div => div.style.backgroundColor = 'white');
}

initialize();

const clearButton = document.getElementById('clear');

clearButton.addEventListener('click', clear);

const divList = Array.from(document.querySelectorAll('.grid-cell'));

divList.forEach(div => div.addEventListener('mouseover', onHover));

