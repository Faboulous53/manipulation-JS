const canvas = document.getElementById('art');
const ctx = canvas.getContext('2d');

//fonction pour récupérer la position de la souris qui sera
//utilisée au mouseDown et mouseMove
function getMousePos(e){
    const rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
    };
}
//récupérer l'événement du mouvement de la souris 
function mouseMove(e){
    const mousePos = getMousePos(e);
    //tracer la ligne en fonction de la position de la souris
    ctx.lineTo(mousePos.x, mousePos.y);
    //fait une ligne
    ctx.stroke();
    //changer la couleur
    ctx.strokeStyle = "salmon";
    //taille de la ligne
    ctx.lineWidth = 10;
}

canvas.addEventListener('mousedown', (e) => {
    e.preventDefault();
    //récupérer position souris
    const mousePos = getMousePos(e);
    //Tu vas commencer à dessiner quelque chose
    ctx.beginPath();
    ctx.moveTo(mousePos.x, mousePos.y);
    canvas.addEventListener('mousemove', mouseMove);
    canvas.addEventListener('mouseup', () => {
        canvas.removeEventListener('mousemove', mouseMove)
    })

});

reset.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})




