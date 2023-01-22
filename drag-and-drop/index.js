//objectif, déplacer des éléments du dom à l'aide de JS
let item 

//dragstart => quand j'attrape
document.addEventListener("dragstart", (e) => {
    item = e.target;

});

//dragover => quand je déplace
document.addEventListener('dragover', (e) => {
    e.preventDefault();
})

//drop => quand tu relache l'élément je veux que tu fasses
document.addEventListener('drop', (e) => {
    //condition, si la cible est bien l'ul avec data-draggable="target"
    if(e.target.getAttribute('data-draggable') == "target"){

        e.preventDefault(e);
        //on identifie l'élément dans lequel on souhaite relacher
        //console.log(e.target);
        e.target.appendChild(item);
    }
});

//pour éviter les bug, vider ce qui est contenu dans item à la fin du drag
document.addEventListener('dragend', () => {
    item == null;
});