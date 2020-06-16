const first = []
const second = []
const third = []

// const discos = document.getElementById('disks')
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
        if (evento.target.classList.contains('start')) {
            var torre = document.getElementById('tStart')
            var discosTorre = torre.childElementCount
            var disco = torre.lastElementChild
            var DiscoTamanho = disco.clientWidth
        }

        if (evento.target.classList.contains('offset')) {
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
        
        if (evento.target.classList.contains('end')) {
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
        if (valido == true) {//se for valido, mudar a posição do disco no disco (appendChild)
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
// Pegando todas os cliques nas torres, falta implementar a função principal

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
        // verificar disco de origem selecionado
        if (evento.target.classList.contains('start')) {
            TowerFinal = first
            console.log('DESTINO: start selected')
        }

        if (evento.target.classList.contains('offset')) {
            TowerFinal = second
            console.log('DESTINO: offset selected')
        }

        if (evento.target.classList.contains('end')) {
            TowerFinal = third
            console.log('DESTINO: end selected')
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
// Função que limpa o número de movimentos e recoloca os discos na Tower Start
function resetGame() {
    movimentos = 0;
    first = [];
    second = [];
    third = [];
    const place = document.getElementById('towers').firstElementChild; //mudar o nome do id depois
    console.log(place)
    place.appendChild(disco1);
    place.appendChild(disco2);
    place.appendChild(disco3);
    place.appendChild(disco4);
}


////////////////////// FUNÇÃO PRINCIPAL /////////////////
window.onload = main
function main() {

    // const TorreSelecionada = pegarDisco() // variavel e função temporária apenas para testes.

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