export default function alerta(mensagem){
    let body = document.querySelector('body');
    let alerta = document.createElement('div');
    alerta.innerHTML = "<p>"+mensagem+"</p>";

}