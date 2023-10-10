let container = document.getElementById('container');
let counter = 1;
for(i=1; i<=4; i++){
    for(j=1; j<=4; j++){
        let newdiv = document.createElement('div');
        newdiv.setAttribute('id', `${counter}`)
        container.appendChild(newdiv);
        counter++;
        newdiv.addEventListener('hover', function(){
            document.getElementById(`${counter}`).style.backgroundColor = 'blue';
        })
    }
}
let divs = container.children;
document.addEventListener('')