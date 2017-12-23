
const container = document.querySelector('#container');
let squares = prompt('Choose the number of columns');

createGrid(squares);

function containerWidth(number){
  return container.style.width = `${number}px`;
}

function createDiv(){
  let div = document.createElement('div');
  div.classList.toggle('grid')
    return container.appendChild(div);
}

function createGrid(cols){
  for(var i=1; i <= (cols **2); i++){
    createDiv();
  }
  containerWidth(35 * cols)
}
