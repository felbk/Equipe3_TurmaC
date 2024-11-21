document.addEventListener("DOMContentLoaded", function(){
    topicos = document.querySelectorAll(".topico");
    if ( sessionStorage.getItem("temas") == null){
        let temas = {}
        topicos.forEach(topico => {
            temas[topico.querySelector("h2").innerHTML]=0
        });

        sessionStorage.setItem("temas" , JSON.stringify(temas))
        console.log(JSON.parse(sessionStorage.getItem('temas')))
        console.log(temas)

    }
    else{
        console.log(JSON.parse(sessionStorage.getItem('temas')))
    }
    
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