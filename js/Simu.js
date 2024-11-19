function insereNaSimulacao(array){
    let area = document.querySelector(".simulation-area");
  for (nmcomponente of array) {
     let componente = document.querySelector("#".concat(nmcomponente))
     area.appendChild(componente.cloneNode(true));
     componente.remove()
     
  }
}

function alerta(mensagem){
    let body = document.querySelector('body');
    let alerta = document.createElement('div');
    alerta.className = "alerta";
    alerta.innerHTML = "<p>"+mensagem+"</p>";
    body.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 3000); 

}

function simulação(dirImagem){
    let body = document.querySelector('body');
    let alerta = document.createElement('div');
    alerta.className = "alerta";
    img = document.createElement("img")
    img.src= dirImagem
    alerta.appendChild(img)
    body.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 8000); 

}


function analisaSimulacao(ids = Array){
    if (ids.length == 0){
        alerta("Simulando uma tela vazia? Filosófico, mas tente inserir algum componente...");
    }
    else if( (ids.includes('bateria')) == false){
        alerta("Energia... aquilo que move tudo, Insira uma fonte ou bateria em seu circuito para gerar DDP...");
    }
    else if (ids.length == 2){
        alerta("Temos DDP, definitivamente! Porém se quiser fazer algo com ela insira mais componentes e vamos aprender!")
    }
    else if((ids.includes("led")) && (ids.includes("resistor") == false) ){
        alerta("A simulação rodou! : ) \nPorém o Led queimou... : (")
    }
    else if(ids.length == 4){
        //Rodando simulação com led e resistor, inserir imagem
        alerta ("A simulação rodou e o led não queimou! : ) \nConfira os valores de Tensão, Corrente e Resistência na imagem da simulação!");
        setTimeout(function(){
            simulação("img/comled.jpeg");
        },3000);

    }
    else{
        //Rodando simulação com resistor, inserir imagem
        alerta ("A simulação rodou! : ) \nConfira os valores de Tensão, Corrente e Resistência na imagem da simulação!");
        setTimeout(function(){
            simulação("img/semled.jpeg");
        },3000);
    }
}

document.addEventListener("DOMContentLoaded",function(){
    

    const inseridos = Array();
    let componentes = document.querySelectorAll(".componente");
    componentes.forEach(element => {
        element.addEventListener("click", function(){
            if (inseridos.length == 0) {
                if (element.id != "protoboard"){
                    alerta("Você não consegue simular um circuito sem uma protoboard ou fios...")
                } else { 
                    
                    inseridos.push(element.id);
                    insereNaSimulacao([element.id])
                    document.querySelector("#limpar").style.display= "block";

                }
            }
            else{ 
                
                if (element.id == "arduino") {
                alerta("O arduino é incrível! Mas deixe para usá-lo quando avançar um pouco mais nas lições básicas...")
                }
                else if (element.id == "botao" || element.id == "potenciometro"){
                    alerta("Controlar a corrente será incrível no futuro, mas no momento vamos focar em circuitos mais basicos")
                }
                else{
                    
                    inseridos.push(element.id);
                    insereNaSimulacao([element.id]);
                    document.querySelector("#limpar").style.display= "block";
                }
             }
        });

    });
    
    let btsimular = document.querySelector("#btsimular");
    btsimular.addEventListener("click", function(){
        componentesInseridos = document.querySelectorAll(".simulation-area > .componente")
        let ids = Array()
        componentesInseridos.forEach(element => {
            ids.push(element.id)
        });

        analisaSimulacao(ids);
        
    });

    let btlimpar = document.querySelector("#limpar");
    btlimpar.addEventListener("click", function(){
        
        document.querySelector("#limpar").style.display= "none";
        location.reload();
    });
    
    
    

});