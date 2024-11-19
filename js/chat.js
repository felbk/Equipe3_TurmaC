function getresposta() {
    const userInput = document.querySelector('#inputmsg').value.toLowerCase();
    const chatBox = document.querySelector('#mensagens');
    const resposta = document.createElement('div');
    
    // Mostra a pergunta do usuário
    chatBox.innerHTML += `<div class="usuario"><h2
    >Você:</h2
    > ${userInput}</div>`;
    
    // Resposta do chatbot
    if (userInput.includes('quem criou você') || (userInput.includes('criou') && (userInput.includes("lei") == false ))|| userInput.includes('quem fez voce') || userInput.includes('como voce foi criado') || userInput.includes('conte mais sobre voce') || userInput.includes('conte mais sobre você')){
        resposta.innerHTML = `<div class="bot"><h2>EDUINO:</h2>Eu fui criado por uma equipe do segundo semestre de engenharia do Insper em 2024.2 composta pelos seguintes membros: <h2>Camila Mendes</h2> <h2>Felipe Lambak</h2> <h2>João Benevides</h2> <h2>Matheus Amorim</h2>  <h2>Matheus Braido</h2> Ainda que eu tenha sido feito em um projeto de curto prazo, meus criadores se empenharam com o projeto e como consequência aprimoraram suas habilidades com HTML , CSS , JS e também aprimoraram sua comunicação com o usuário durante toda a disciplina de Codesign de Apps.
      </div>`;

    }
    else if (userInput.includes('primeira lei de ohm') || userInput.includes('ohm') || userInput.includes('primeira lei') || (userInput.includes('conceito') && ((userInput.includes("tensão")||userInput.includes("corrente") || userInput.includes("resistência")) == false ))) {
        resposta.innerHTML = `<div class="bot"><h2
        >EDUINO:</h2
        > A primeira lei de Ohm afirma que a corrente (I) que passa por um condutor é diretamente proporcional à tensão (V) aplicada e inversamente proporcional à resistência (R). A fórmula é: <br> <h2
        >V = I * R</h2
        ></div>`;
    } else if (userInput.includes('como calcular') || userInput.includes('calcular')  || userInput.includes('formulas')|| userInput.includes('fórmulas')) {
        resposta.innerHTML = `<div class="bot"><h2
        >EDUINO:</h2
        > Para calcular a tensão (V), use a fórmula: <h2
        >V = I * R</h2
        >. <br> Para calcular a corrente (I), use: <h2
        >I = V / R</h2
        >. <br> Para calcular a resistência (R), use: <h2
        >R = V / I</h2
        >.</div>`;
    } else if (userInput.includes('tensão')) {
        resposta.innerHTML = `<div class="bot"><h2
        >EDUINO:</h2
        > Tensão (V) é a diferença de potencial elétrico entre dois pontos de um circuito. Ela impulsiona a corrente elétrica.</div>`;
    } else if (userInput.includes('corrente')) {
        resposta.innerHTML = `<div class="bot"><h2
        >EDUINO:</h2
        > Corrente elétrica (I) é o fluxo de carga elétrica em um circuito. Ela é medida em amperes (A).</div>`;
    } else if (userInput.includes('resistência')) {
        resposta.innerHTML = `<div class="bot"><h2
        >EDUINO:</h2
        > Resistência (R) é a oposição ao fluxo de corrente elétrica em um circuito. Ela é medida em ohms (Ω).</div>`;
   
    }
    else if(userInput.includes('ola') || userInput.includes('quem e voce') || userInput.includes('quem é você') || userInput.includes('oi') || userInput.includes('olá') || userInput.includes("salve") ){
        resposta.innerHTML = `<div class="bot"><h2>EDUINO:</h2>Olá eu sou o EDUINO Tech (uma abreviação de EDUcational INterface Of Technology) mas pode me chamar só de EDUINO mesmo, se quiser posso até contar mais sobre mim, mas estou aqui para ajudá-lo com o seu primeiro conteúdo, a primeira lei de ohm, me faça perguntas simples sobre esse tópico que irei responde-lo, ainda estou na minha primeira versão, melhoras virão em breve, vamos aprender mais juntos?!
      </div>`;

    }
    else {
        resposta.innerHTML = `<div class="bot"><h2
        >EDUINO:</h2
        > Desculpe, não entendi sua pergunta. Tente perguntar sobre a primeira lei de Ohm! Lembre-se de escrever sempre com acentos, ainda não me acostumei com a informalidade das redes, irei melhorar isso em breve! ;) </div>`;
    }
    
    // Adiciona a resposta do bot ao chat
    chatBox.innerHTML += resposta.innerHTML;
    
    // Limpa o campo de entrada do usuário
    document.querySelector('#inputmsg').value = '';
    
    // Rola para o final do chat
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  document.addEventListener('DOMContentLoaded', function(){
    let enviar = document.querySelector("#enviamsg");
    enviar.addEventListener("click", function (){
        getresposta();
    });
  })