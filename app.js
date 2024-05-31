// seleccionar los elementos del dom



const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarColorHexAleatorio() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for (i = 0 ; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHex += digitos[indiceAleatorio];
    }

    return colorHex;
}


boton.addEventListener('click', function() {
    let colorAleatorio = generarColorHexAleatorio(); 
    //actualizar texto
    color.textContent = colorAleatorio;
    //actualizar color de fondo
    document.body.style.backgroundColor = colorAleatorio;
});