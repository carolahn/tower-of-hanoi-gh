const first = []
const second = []
const third = []

const disco1 = document.getElementById("25")
const disco2 = document.getElementById("50")
const disco3 = document.getElementById("75")
const disco4 = document.getElementById("100")

const wins = 0

function moveDisc() {
    const destino = moveTo()

    if (torre_vazia == true) {
        alert('invalid')
    }

    if (disco < discoDestino) {
        destino.push(disco)
    }



    // movimentos = 2 ^ 4 - 1
}

function moveTo(evt) {
    evt.currentTarget

    return containerID
}

function checkWinner() {
    verificar_numero_de_movimentos
    verificar_ordem_final_discos
    
}
//Carol: vou trabalhar aqui /////////////
function resetGame() {
    // limpar as torres
}

function main() {
    const container = document.getElementById("cointanerFirst")
    container.addEventListener('click', moveDisc)

    

    if (checkWinner() !== -1) {
        wins++
        resetGame()
    }


}