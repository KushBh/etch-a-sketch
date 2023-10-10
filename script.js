let container = document.getElementById('container');
let newgrid = document.getElementById('newgrid')
newgrid.addEventListener('click', function(){
    let gridInput = document.getElementById('gridsize');
    let counter = 1;
    let gridSize = parseInt(gridInput.value);
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    for(i=1; i<=gridSize; i++){
        for(j=1; j<=gridSize; j++){
            let newdiv = document.createElement('div');
            newdiv.setAttribute('id', `${counter}`);
            newdiv.classList.add("grid-item");
            container.appendChild(newdiv);
            counter++;
            newdiv.addEventListener('mouseenter', function(){
                this.style.backgroundColor = 'blue';
            })
        }
    }
    
});
