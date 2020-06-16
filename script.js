const first = []
const second = []
const third = []

const discos = document.getElementById('disks')
const disco1 = document.getElementsByClassName("primeiro")
const disco2 = document.getElementsByClassName("segundo")
const disco3 = document.getElementsByClassName("terceiro")
const disco4 = document.getElementsByClassName("quarto")

let movimentos = 0
const wins = 0

let TowerStart = '' 
let TowerFinal = ''


////////////////////// Pegar o disco, para verificar se é possivel movê-lo /////////////////
function pegarDisco() {
    discos.addEventListener('click', function (evento) {
        if (evento.target.classList.contains('primeiro')) {
            console.log('primeiro selecionado')
        }
        if (evento.target.classList.contains('segundo')) {
            console.log('segundo selecionado')
        }
        if (evento.target.classList.contains('terceiro')) {
            console.log('terceiro selecionado')
        }
        if (evento.target.classList.contains('quarto')) {
            console.log('quarto selecionado')
        }
    })
}



// Pegando todas os cliques nas torres, falta implementar a função principal
const towers = document.getElementById('towers')
////////////////////// FUNÇÃO PRIMEIRO CLICK (ORIGEM) /////////////////
function PrimeiroClick() {
    towers.addEventListener('click', function(evento) {
        if (evento.target.classList.contains('start')) {
            TowerStart = first
            console.log('start selected')
        }

        if (evento.target.classList.contains('offset')) {
            TowerStart = second
            console.log('offset selected')
        }

        if (evento.target.classList.contains('end')) {
            TowerStart = third
            console.log('end selected')
        } 
    })
}

////////////////////// FUNÇÃO SEGUNDO CLICK (DESTINO) /////////////////
function SegundoClick() {
    towers.addEventListener('click', function(evento) {
        if (evento.target.classList.contains('start')) {
            TowerFinal = first
            console.log('start selected')
        }

        if (evento.target.classList.contains('offset')) {
            TowerFinal = second
            console.log('offset selected')
        }

        if (evento.target.classList.contains('end')) {
            TowerFinal = third
            console.log('end selected')
        } 
    })
}


////////////////////// Função, que recebe a origem com o disco, e manda para o destino fazendo os testes /////////////////
function moveDisc(disco) {
    const destino = TowerFinal

    if (destino.length === 0) {
        destino.push(disco)
    }

    if (disco < discoDestino) {
        destino.push(disco)
    }
}


// Função checa se venceu, verificando o numero minimo de movimentos, e verifica as torres
function checkWinner() {
    if (movimentos === 15) {
        if (second.length === 4) {
            alert('winner!')
        } else if (third.length === 4) {
            alert('winner!')
        }
    } else {
        alert('Perdeu!')
    }    
}

function resetGame() {
    // limpar as torres
}


////////////////////// FUNÇÃO PRINCIPAL /////////////////
window.onload = main
function main() {
    for (let start = 1; start <= 4; start++) {
        first.push(`disco${start}`)
    }

    const DiscoSelecionado = pegarDisco()

    PrimeiroClick()
    if (towerStart !== '') {
        SegundoClick()
    }
    
    // verificarTorre
    // verificaDisco
    // moveDisc()

    // checkWinner()

    // resetGame()
}