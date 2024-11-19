document.addEventListener("DOMContentLoaded", function(){
    topicos = document.querySelectorAll(".topico");
    var atual = null;
    topicos.forEach(topico => {
       topico.addEventListener("click",function(){
        if (topico.children[1].style.display == "flex"){
            topico.children[1].style.display = "none"
            atual = null
        } else if(atual == null) {
            topico.children[1].style.display = "flex";
            atual = topico;
        }
        else{
            atual.children[1].style.display = "none";
            topico.children[1].style.display = "flex";
            atual = topico;

        }
       })
    });
})