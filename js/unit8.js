function hamburguesa() {
    var botonera = document.getElementById('menunav')
    if (botonera.style.display == 'block'){
        botonera.style.display = 'none'
    } else {
        botonera.style.display = 'block'
    }

}
function show(servicio) {
    var texto = document.getElementById(servicio)
    texto.style.display = 'block'
}

function hide(servicio) {
   var text2 = document.getElementById(servicio)
   text2.style.display = 'none'
}

