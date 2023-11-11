/* Exibir popup de configuração */
document.querySelector('#btn-config').onclick = () => {
    document.querySelector('#config').style.display= "flex"
}

/* Fechar popup de configuração */
document.querySelector('#fechar-config').onclick = () => {
    document.querySelector('#config').style.display= "none"
}

document.querySelector('#teste').onclick = () => {
    document.querySelector('.teste-vocacional').style.display= "block"
}