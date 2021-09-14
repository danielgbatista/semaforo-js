'use stric'
const semaforo = document.getElementById('semaforo')


function semaforoAutomatico() {
    semaforoVermelho() 
    setTimeout(() => {
        semaforoAmarelo()
        setTimeout(() => {
           semaforoVerde()
           setTimeout(() => {
              semaforoAutomatico() 
           }, 400); 
        }, 400);        
    }, 400);
}

function semaforoAmarelo() {
    semaforo.src = "img/amarelo.png"
}

function semaforoVerde() {
    semaforo.src = "img/verde.png"
}

function semaforoVermelho() {
    semaforo.src = "img/vermelho.png"
}


document.getElementById('vermelho')
.addEventListener("click", semaforoVermelho)

document.getElementById('amarelo')
.addEventListener("click", semaforoAmarelo)

document.getElementById('verde')
.addEventListener("click", semaforoVerde)

document.getElementById('automatico')
.addEventListener("click", semaforoAutomatico)