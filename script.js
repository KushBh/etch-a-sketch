let container = document.getElementById('container');
let newgrid = document.getElementById('newgrid')
newgrid.addEventListener('click', function(){
    let gridInput = document.getElementById('gridsize');
    let gridSize = parseInt(gridInput.value);
    container.innerHTML('');
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for(i=1; i<=gridSize; i++){
        let newdiv = document.createElement('div');
        newdiv.classList.add("grid-item");
        container.appendChild(newdiv);
        newdiv.addEventListener('mouseenter', function(){
            this.style.backgroundColor = 'blue';
        })
    }
    
});
