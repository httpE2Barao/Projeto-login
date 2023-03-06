const input = document.querySelector('.botao')
const form = document.querySelector('#form')

function clicar() {
    form.addEventListener('keydown', (evento) => {
        if (evento.key == "Enter") {
            evento.preventDefault();
            logar()
        }
    })
    input.addEventListener('click', () => {
        logar();
    });
}

window.addEventListener('DOMContentLoaded', clicar);

function logar() {
    const usu = document.querySelector('#iusu')
    const sen = document.querySelector('#isen')
    if (usu.value == "admin" && sen.value == "admin"){
        location.href = "https://code-study-rho.vercel.app/"
    }else{
        alert('Usuário ou Senha incorretos!')
    }
}
