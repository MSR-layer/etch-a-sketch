function initialize()
{
    let columns = prompt("how many rows and columns?");

    while(columns >= 100 && columns <= 0 )
        columns = prompt("please enter valid value between 0 and 100");


    let container = document.getElementById('grid');

    let str = '';

    for(let i=0;i<columns;i++) str += ' auto';

    container.style.gridTemplateColumns = str;


    for(let j=0;j<columns*columns;j++){
        let cell = document.createElement('div');
        cell.classList.add('grid-cell');
        container.append(cell);
    }
}

function onHover(){
    this.style.backgroundColor = 'black';
}

initialize();

const divList = Array.from(document.querySelectorAll('.grid-cell'));

divList.forEach(div => div.addEventListener('mouseover', onHover));
