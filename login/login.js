/* Exibição da tela de cadastro */
document.querySelector('.cad').onclick = () => {
    document.querySelector('#login').style.display = 'none'
    document.querySelector('#cad').style.display   = 'flex'  
    document.querySelector('#nova-senha').style.display = 'none'
}

/* Exibição da tela de login */
document.querySelector('.log').onclick = () => {
    document.querySelector('#cad').style.display    = 'none'  
    document.querySelector('#login').style.display  = 'flex' 
    document.querySelector('#nova-senha').style.display = 'none'
}

/* Exibição da tela para reset de senha */
document.querySelector('.nova-senha').onclick = () => {
    document.querySelector('#cad').style.display    = 'none'  
    document.querySelector('#login').style.display  = 'none'
    document.querySelector('#nova-senha').style.display = 'flex'
}

/* Voltar para tela de login */
document.querySelector('#link2').onclick = () => {
    document.querySelector('#cad').style.display    = 'none'  
    document.querySelector('#login').style.display  = 'flex'
    document.querySelector('#nova-senha').style.display = 'none'
}
