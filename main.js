let puntosUsuario = 0;
let puntosPC = 0;

let instrucciones = document.querySelector('#instrucciones');
let contenedorPuntosUsuario = document.querySelector('#puntos-usuario');
let contenedorPuntosPC = document.querySelector('#puntos-computadora');
let mensaje = document.querySelector('#mensaje');
let contenedorGanaPunto = document.querySelector("#gana-punto");
let elegiTuArma = document.querySelector("#elegi-tu-arma");
let reiniciar = document.querySelector("#reiniciar");

let contenedorEleccionUsuario = document.querySelector('#eleccion-usuario');
let contenedorEleccionPc = document.querySelector('#eleccion-computadora');

let botonesArma = document.querySelectorAll(".arma");
botonesArma.forEach(boton => {
    boton.addEventListener('click', iniciarTurno)
});

function iniciarTurno(e) {
    let eleccionPC = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;
    
    //piedra => 0
    //papel => 1
    //tijera => 2

    if (eleccionPC === 0) {
        eleccionPC = "piedra🪨";
    } else if (eleccionPC === 1) {
        eleccionPC = "papel📃";
    } else if (eleccionPC === 2){
        eleccionPC = "tijera✂️";
    }

    //piedra vence a tijera
    //tijera vence a pappel
    //papel vence a piedra
    //si son iguales es empate

    if (
        (eleccionUsuario === "piedra🪨" && eleccionPC === "tijera✂️") || 
        (eleccionUsuario === "tijera✂️" && eleccionPC === "papel📃") || 
        (eleccionUsuario === "papel📃" && eleccionPC === "piedra🪨")
    ) {
        ganaUsuario();
    } else if (
        (eleccionPC === "piedra🪨" && eleccionUsuario === "tijera✂️") || 
        (eleccionPC === "tijera✂️" && eleccionUsuario === "papel📃") || 
        (eleccionPC === "papel📃" && eleccionUsuario === "piedra🪨")
    ) {
        ganaPC();
    } else {
        empate();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerHTML = eleccionUsuario;
    contenedorEleccionPc.innerHTML = eleccionPC;

    if (puntosUsuario === 5 || puntosPC === 5) {
        
        if (puntosUsuario === 5) {
            instrucciones.innerHTML = "🔥 ¡Ganaste el juego! 🔥";
        }

        if (puntosPC === 5) {
            instrucciones.innerHTML = "😭 ¡La computadora ganó el juego! 😭";
        }

        elegiTuArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }
}

function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerHTML = puntosUsuario;
    contenedorGanaPunto.innerHTML = "!Ganaste un punto! 🔥";
}

function ganaPC() {
    puntosPC++;
    contenedorPuntosPC.innerHTML = puntosPC;
    contenedorGanaPunto.innerHTML = "!La computadora ganó un punto! 😭";
}

function empate() {
    contenedorGanaPunto.innerHTML = "¡Empate! 😮";
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    elegiTuArma.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntosUsuario = 0;
    puntosPC = 0;

    contenedorPuntosUsuario.innerHTML = puntosUsuario;
    contenedorPuntosPC.innerHTML = puntosPC;

    instrucciones.innerHTML = "El primero en llegar a 5 puntos gana."
}