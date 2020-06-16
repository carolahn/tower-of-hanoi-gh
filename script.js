const disco1 = document.getElementById('disc1')
const disco2 = document.getElementById('disc2')
const disco3 = document.getElementById('disc3')
const disco4 = document.getElementById('disc4')

let movimentos = 0
const wins = 0


var count = 0

let TowerStart = '' 
let TowerFinal = ''

var move = []

const towers = document.getElementById('towers')

// capturar o torre selecionada e verificar o disco do topo e seu tamanho.
function pegarDisco(evento) {
    // towers.addEventListener('click', function(evento) {
        if (evento.target.classList.contains('start') | evento.target.parentElement.classList.contains('start')) {
            var torre = document.getElementById('tStart')
            var discosTorre = torre.childElementCount
            var disco = torre.lastElementChild
            var DiscoTamanho = disco.clientWidth
        }

        if (evento.target.classList.contains('offset') | evento.target.parentElement.classList.contains('offset')) {
            var torre = document.getElementById('tOffset')
            var discosTorre = torre.childElementCount
            if (discosTorre !== 0) {
                var disco = torre.lastElementChild
                var DiscoTamanho = disco.clientWidth
            } else {
                var disco = 'sem disco'
                var DiscoTamanho = 0
            }
        }
        
        if (evento.target.classList.contains('end') | evento.target.parentElement.classList.contains('end')) {
            var torre = document.getElementById('tEnd')
            var discosTorre = torre.childElementCount
            if (discosTorre !== 0) {
                var disco = torre.lastElementChild
                var DiscoTamanho = disco.clientWidth
            } else {
                var disco = 'sem disco'
                var DiscoTamanho = 0
            }
        }

        let movimentos = [torre, discosTorre, disco, DiscoTamanho]
        // console.log(movimentos)
        count++
        return movimentos
    // })
}

// Função para pegar os dois clicks
function moveDisco (event) {
    move[count] = pegarDisco(event)
    
    if (count > 1){
        let valido = validaMov(move) //funcao para validar o movimento
        if (valido == true) {
            AdicionarDisco(move)
            //se for valido, mudar a posição do disco no disco (appendChild)
            //criar uma função
        }
        console.log(move)
        count = 0
        move = []
    }

}

function validaMov(move) {
    let startTorre = move[0][0].id
    let endTorre = move[1][0].id
    if (startTorre == endTorre){
        console.log("ERRO: movimento inválido") //adicionar um alerta para o usuário
        return false
    }

    let startDisc = move[0][3]
    let endDisc = move[1][3]
    if (endDisc != 0 && startDisc > endDisc) {
        console.log("ERRO: movimento inválido") //adicionar um alerta para o usuário
        return false
    }
    return true
}

function AdicionarDisco(move) {
    let torreDestino = move[1][0]
    let disco = move[0][2]
    torreDestino.appendChild(disco)
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


// Função que limpa o número de movimentos e recoloca os discos na Tower Start
function resetGame() {
    const place = document.getElementById('tStart')
    const disco1 = document.getElementById('disc1')
    const disco2 = document.getElementById('disc2')
    const disco3 = document.getElementById('disc3')
    const disco4 = document.getElementById('disc4')
    place.appendChild(disco1);
    place.appendChild(disco2);
    place.appendChild(disco3);
    place.appendChild(disco4);

    const pontos = document.getElementById('mov')
    pontos.innerHTML = 0;

}


////////////////////// FUNÇÃO PRINCIPAL /////////////////
window.onload = main
function main() {

    const towers = document.getElementById('towers')
    towers.addEventListener('click', moveDisco)
    // condição falhando, deve ser consertada

    // PrimeiroClick()
    // if (towerStart !== '') {
    //     SegundoClick()
    // }
    
    // verificarTorre
    // verificaDisco
    // moveDisc()

    // checkWinner()

    // resetGame()
    // document.getElementById('restart').onclick = resetGame()
}