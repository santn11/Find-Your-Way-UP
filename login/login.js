document.querySelector('.cad').onclick = () => {
    document.querySelector('#login').style.display = 'none'
    document.querySelector('#cad').style.display   = 'flex'  
    document.querySelector('#nova-senha').style.display = 'none'
}

document.querySelector('.log').onclick = () => {
    document.querySelector('#cad').style.display    = 'none'  
    document.querySelector('#login').style.display  = 'flex' 
    document.querySelector('#nova-senha').style.display = 'none'
}

document.querySelector('.log').onclick = () => {
    document.querySelector('#cad').style.display    = 'none'  
    document.querySelector('#login').style.display  = 'flex'
    document.querySelector('#nova-senha').style.display = 'none'
}

document.querySelector('.nova-senha').onclick = () => {
    document.querySelector('#cad').style.display    = 'none'  
    document.querySelector('#login').style.display  = 'none'
    document.querySelector('#nova-senha').style.display = 'flex'
}

document.querySelector('#link2').onclick = () => {
    document.querySelector('#cad').style.display    = 'none'  
    document.querySelector('#login').style.display  = 'flex'
    document.querySelector('#nova-senha').style.display = 'none'
}
