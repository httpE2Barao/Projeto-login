const usu = document.querySelector('#iusu')
const sen = document.querySelector('#isen')
const input = document.querySelector('.botao')

function clicar() {
    sen.addEventListener('keydown', (evento) => {
        if (evento.key == "Enter") {
            evento.preventDefault();
            console.log("click")
            logar()
        }
    })
    input.addEventListener('click', () => {
        logar();
    });
}

window.addEventListener('DOMContentLoaded', clicar);

function logar(){
    if (usu.value == "admin" && sen.value == "admin"){
        location.href = "https://httpe2barao.github.io/Code-study/HTML/1.P%C3%A1gina%20Inicial.html"
    }else{
        alert('Usuário ou Senha incorretos!')
    }
}