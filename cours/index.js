//CANVAS
//------

// function draw() {
    
//     const canvas = document.getElementById('canvas');
//     const ctx = canvas.getContext('2d');

//     //fillStyle 'choix couleur'
//     ctx.fillStyle = 'rgb(200,0,0)';
//     //fillRect(à 10px du haut à gauche axe x, à 10px de la gauche axe y, width 10px, height 50px)
//     ctx.fillRect(10,10,10,50);
    
//     ctx.fillStyle = 'rgb(0,100,200,0.5)';
//     ctx.fillRect(10,30,100,50);
    
//     ctx.fillStyle = 'rgba(100,100,200,0.5)';
//     ctx.fillRect(10,25,100,100);
    
//     //carré qui efface ce qu'il y a dedans
//     ctx.clearRect(15,25,40,40);
    
//     //carré juste avec des ligne sans remplissage
//     ctx.strokeRect(125,75,50,50);
    
    
//     ctx.fillStyle = 'rgba(200,100,200,0.5)';
//     //beginPath pour démarrer une forme géométrique
//     ctx.beginPath();
//     //tu vas te mettre à 180 / 150
//     ctx.moveTo(180, 150);
//     //à l'endroit du moveTo, faire une ligne de 100/75
//     ctx.lineTo(100, 75);
//     ctx.lineTo(100, 150);
//     //tu execute l'ensemble
//     ctx.fill();
// }

// window.addEventListener('load', draw);

//------------
//TRY / CATCH
//----------- 
//TEST BLOG DE CODE

try {
    //test block de code 
    maFontion();    
} catch (err){
    //console.log(err);
}

function isValidJSON(txt){
    try{
        JSON.parse(txt);
    }catch{
        return false;
    }
}

//console.log(isValidJSON('bloup'));

try {
    //test block de code 
    maFonction();    
} catch (err){
    console.log(err);
}finally{
    console.log('on est au bout !');
}

//Throw
function isNumber(num){
    if(isNaN(num)){
        throw 'Not a number !!'
    }else{
        console.log("C'est un nombre");
    }
    //plein de code
}

try{
    isNumber('2d')
}catch (err){
    console.log(err);
}