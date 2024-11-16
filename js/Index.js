

function sandON(){
    let menu = document.querySelector("#sanduiche")
    menu.style.display = "block";
    menu.style.position = "absolute";
    menu.style.width = "100%";
    menu.style.backgroundColor = "rgba(255,255,255,0.95)"
    menu.style.paddingBottom = "2rem"
     
}

function sandOFF(){
    let menu = document.querySelector("#sanduiche")
    menu.style.display = "none";
}

function menuSand(){
    let bt = document.querySelector("#btSanduiche")
    var btON = 0
    bt.addEventListener("click", function(){
       if (btON == 0){
        btON = 1;
        bt.src="img/voltar.png";
        sandON();
       } else{
        btON = 0;
        bt.src="img/sanduiche.svg";
        sandOFF();
       }


     

    })
}

document.addEventListener("DOMContentLoaded",function(){

menuSand()

})