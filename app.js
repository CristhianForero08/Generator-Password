
const button =document.getElementById('button')
let resultado = document.getElementById('resultado')
let alerta = document.getElementById('alerta')
alerta.innerText = 'Seguridad de la contrasena: '

let circle = document.getElementById('circle');

let inputRango =document.getElementById('longitud')
let valor = inputRango.value

let textoRango = document.getElementById('textoRango')

textoRango.innerText = `La logitud de tu contraseña: ${valor}`





function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function extraerAleatorio(cadena) {
    return cadena.charAt(aleatorio(0, cadena.length - 1));
}

function generarContrasena() {
    
    const longitud = valor

    if (isNaN(longitud) || longitud < 12) {
        alerta.innerText = 'La contraseña es débil';
    } else {
        alerta.innerText = 'La contraseña es fuerte';
    }

    let contrasena = ""
    const caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const caracteresMinusculas = "abcdefghijklmnopqrstuvwxyz"
    const numeros = "0123456789"
    const simbolos = "!@#$%^&*()_-+={}[]:;'<>,.?/|\\~`"

    for (let i = 0; i < longitud; i++) {
        let numeroAleatorio = aleatorio(1, 4)

        if (numeroAleatorio === 1) {
            caracterAleatorio = extraerAleatorio(caracteresMayusculas)
        } else if (numeroAleatorio === 2) {
            caracterAleatorio = extraerAleatorio(caracteresMinusculas);
        } else if (numeroAleatorio === 3) {
            caracterAleatorio = extraerAleatorio(numeros);
        } else {
            caracterAleatorio = extraerAleatorio(simbolos);
        }

        contrasena += caracterAleatorio;
    }

    return contrasena
}

inputRango.addEventListener('change', (e) =>{
    valor = e.target.value
    textoRango.innerText = `La logitud de tu contraseña: ${valor}`
    resultado.innerText = generarContrasena()
    
})

button.addEventListener('click', () => {
      
    let copia = document.getElementById('copia')
    copia.style.color = '#efff3d'
    let texto = resultado.innerText

    //Clipboard API para copiar el texto al portapapeles
    navigator.clipboard.writeText(texto)
        .then(function() {
            
            copia.innerText = `Texto copiado: ${texto}`
            
        })
        .catch(function(error) {
            
            console.error('Error al copiar el texto: ', error);
        })

})


window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let scaleFactor = 1 + (scrollPosition / 900); 
    
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundSize = "calc(100% + " + scrollPosition + "px)";
});




    
document.addEventListener('mousemove', function(e) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    
    circle.style.left = mouseX + 'px';
     circle.style.top = mouseY + 'px';
});
    
    
window.addEventListener('scroll', function() {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
        
    circle.style.left = mouseX + 'px';
        circle.style.top = mouseY + 'px';
});



