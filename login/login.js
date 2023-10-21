document.querySelector('.cad').onclick = () => {
    document.querySelector('#login').style.display = 'none'
    document.querySelector('#cad').style.display   = 'flex'  
}

document.querySelector('.log').onclick = () => {
    document.querySelector('#cad').style.display    = 'none'  
    document.querySelector('#login').style.display  = 'flex' 
}