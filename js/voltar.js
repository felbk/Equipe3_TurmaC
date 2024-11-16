document.addEventListener("DOMContentLoaded",function(){
    voltar = document.querySelector("#voltar");
    voltar.addEventListener("click", function(){
        history.back();
    });
});