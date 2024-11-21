

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

function fundoPercentual(percentual) {
    const cor1 = `rgb(71,165,22)`;  
    const cor2 = `rgb(157,255,128)`;  
    const cor3 = `rgb(255,247,128)`;  

    const ponto = `${percentual}%`;

    document.querySelector('#Progress').style.backgroundImage = `linear-gradient(to right, ${cor1}, ${cor2} ${ponto}, ${cor3})`;
}


document.addEventListener("DOMContentLoaded",function(){

menuSand()

if (sessionStorage.getItem("temas") != null){
    let temas = JSON.parse(sessionStorage.getItem('temas'))
    let feitos = 0
    let total = Object.keys(temas).length;
    for (let tema of  Object.values(temas)){
        if (tema==1){
            feitos++;

        }
    }
    console.log(feitos)
    console.log(total)
    progresso = document.querySelector("#Progress")
    let pg = Math.round((feitos/total)*100)
    progresso.innerHTML = pg+"%"
    fundoPercentual(pg)
}

})