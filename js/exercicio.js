function geraQuestoes(){
 let questoes = document.querySelectorAll('.questao');
 const respostas = Array();
 questoes.forEach(questao => {

    let fornecidos = questao.querySelectorAll("h3 > div");
    let clssfornecidos = Array();
    fornecidos.forEach(fornecido =>{
        clssfornecidos.push(fornecido.className);
    });
    
    let min = 5;
    let max = 25;
    const Tens = Math.floor(Math.random() * (max - min + 1)) + min;
    min = 1;
    max = 100;
    const Corr = Math.floor(Math.random() * (max - min + 1)) + min;
    min = 1;
    max = 500;
    const Res = Math.floor(Math.random() * (max - min + 1)) + min;

    //caso para calcular tensão
    if (clssfornecidos.includes("V") == false){
        questao.querySelector("h3 > .R").innerHTML = Res;
        questao.querySelector("h3 > .mA").innerHTML = Corr;
        let resposta = Res * (Corr / 1000);
        resposta = Math.round(resposta * 1000) / 1000 //duas casas decimais
        respostas.push(resposta);

        respostaslocais = Array(resposta , resposta*2  , resposta /10, (resposta * 200) );
        respostaslocais.sort(() => Math.random() - 0.5);
        

        alternativas = questao.querySelectorAll(".alternativas > button");
        for (i=0 ; i < 4 ; i++){
            alternativas[i].innerHTML = Math.round(respostaslocais[i] * 1000) / 1000 + "V";
            
        }
    }
    //caso para calcular corrente
    else if (clssfornecidos.includes("mA") == false){
        questao.querySelector("h3 > .R").innerHTML = Res;
        questao.querySelector("h3 > .V").innerHTML = Tens;
        let resposta = Tens / Res;
        resposta = Math.round(resposta * 1000) / 1000 //duas casas decimais
        respostas.push(resposta);

        respostaslocais = Array(resposta , resposta*2  , resposta /10, (resposta * 200) );
        respostaslocais.sort(() => Math.random() - 0.5);
        

        alternativas = questao.querySelectorAll(".alternativas > button");
        for (i=0 ; i < 4 ; i++){
            alternativas[i].innerHTML = Math.round(respostaslocais[i] * 1000) / 1000 + "A";
            
        }
    }
    //caso para calcular resistência
    else if (clssfornecidos.includes("R") == false){
        questao.querySelector("h3 > .mA").innerHTML = Corr;
        questao.querySelector("h3 > .V").innerHTML = Tens;
        let resposta = Tens / (Corr / 1000);
        resposta = Math.round(resposta * 1000) / 1000 //duas casas decimais
        respostas.push(resposta);

        respostaslocais = Array(resposta , resposta*2  , resposta /10, (resposta * 200) );
        respostaslocais.sort(() => Math.random() - 0.5);
        

        alternativas = questao.querySelectorAll(".alternativas > button");
        for (i=0 ; i < 4 ; i++){
            alternativas[i].innerHTML = Math.round(respostaslocais[i] * 1000) / 1000 + "Ω";
           
        }
    }





 });

 return respostas;
}


document.addEventListener("DOMContentLoaded",function(){
    corretas = geraQuestoes();
    console.log(corretas);
});