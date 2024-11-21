function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function alerta(mensagem){
    let body = document.querySelector('body');
    let alerta = document.createElement('div');
    alerta.className = "alerta";
    alerta.innerHTML = "<p>"+mensagem+"</p>";
    body.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 4000); 

}


document.addEventListener("DOMContentLoaded",function(){
    const lupa = document.querySelector("#pesquisar");
    const input = document.querySelector(".cabecalho > input")

    input.placeholder= "Pesquise e seja redirecionado p/ a página";

    lupa.addEventListener("click", function(){
        if (input.style.display == "none"){
        
            input.style.display = "block"
            lupa.src = "img/avancar.png"
        }else{
            input.style.display = "none"
            lupa.src = "img/lupa.png";

            pesquisa = removerAcentos(input.value).toLowerCase();
            if (pesquisa.includes("simu") || pesquisa.includes("circuit") || pesquisa.includes("led") || pesquisa.includes("resistor") || pesquisa.includes("protoboard") || pesquisa.includes("arduino") || pesquisa.includes("bateria")   ){
                window.location.href = "simular.html"
            }
            else if(pesquisa.includes("chat") || pesquisa.includes("conversa") || pesquisa.includes("eduino")|| pesquisa.includes("bot")|| pesquisa.includes("duvida")  ){
                window.location.href = "chat.html"
            }
            else if(pesquisa.includes("materia") || pesquisa.includes("conteudo") || pesquisa.includes("aprend")|| pesquisa.includes("ohm")|| pesquisa.includes("teoria") || pesquisa.includes("licao")|| pesquisa.includes("quest") || pesquisa.includes("exer") || pesquisa.includes("atividade") ){
                window.location.href = "aprender.html"
            }
            else if(pesquisa.includes("home") || pesquisa.includes("menu") || pesquisa.includes("inici")|| pesquisa.includes("video")|| pesquisa.includes("principal") || pesquisa.includes("explor") ){
                window.location.href = "index.html"
            }
            else if(pesquisa.includes("dado") || pesquisa.includes("progresso") || pesquisa.includes("avanco")|| pesquisa.includes("estat")|| pesquisa.includes("result") ){
                window.location.href = "dados.html"
            }
            else if (pesquisa != ""){
                alerta("Não encontramos uma página relacionada com a pesquisa... Tente ('simular um circuito' , 'conteudo', 'chat' e outras buscas resumidas )")
            }



            input.value = ''
        }
        
    })
});