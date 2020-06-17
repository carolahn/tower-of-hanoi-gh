var count = 0
let countMovimentos = 0

var move = []

function tempo() {
    let seconds = 0
    let minutes = 0

    window.timer = setInterval(function () {
        if (seconds == 59) {
            minutes++
            seconds = 0
        } else {
            seconds++
        }
        let timerID = document.getElementById('timerID')
        timerID.textContent = (String(minutes).padStart(2, '0')) + ':' + (String(seconds).padStart(2, '0'))

    },  1000)
}

function stopTimer() {
    clearInterval(timer)
}

function criarTorres() {
    const towers = document.getElementById('towers')

    const arrIdClass = [['tStart', 'torre start'], ['tOffset', 'torre offset'], ['tEnd', 'torre end']]
    
    for (let count = 0; count <= 2; count++) {
        const tower = document.createElement('div')
        tower.id = arrIdClass[count][0]
        tower.className = arrIdClass[count][1]
        towers.appendChild(tower)
    }
}

function criarDiscos() {
    const towerStart = document.getElementById('tStart')
    
    const arrIdClass = [['disc1', 'disco primeiro'], ['disc2', 'disco segundo'], ['disc3', 'disco terceiro'], ['disc4', 'disco quarto']]

    for (let count = 0; count <= 3; count++) {
        const disco = document.createElement('div')
        disco.id = arrIdClass[count][0]
        disco.className = arrIdClass[count][1]
        towerStart.appendChild(disco)
    }

}

// capturar o torre selecionada e verificar o disco do topo e seu tamanho.
function pegarDisco(evento) {
        if (evento.target.classList.contains('start') | evento.target.parentElement.classList.contains('start')) {
            var torre = document.getElementById('tStart')
            var discosTorre = torre.childElementCount
            if (discosTorre !== 0) {
                var disco = torre.lastElementChild
                var DiscoTamanho = disco.clientWidth
            } else {
                var disco = 'sem disco'
                var DiscoTamanho = 0
            }
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
        count++
        return movimentos
}

// Função para pegar os dois clicks
function moveDisco (event) {
    move[count] = pegarDisco(event)
    if (count > 1){
        let valido = validaMov(move) //funcao para validar o movimento
        if (valido == true) {
            let disco = move[0][2]
            if (disco !== 'sem disco') {
                AdicionarDisco(move)
                //se for valido, mudar a posição do disco no disco (appendChild)
            }
        }

        let contador = document.getElementById('mov')
        contador.textContent = countMovimentos

        if (countMovimentos >= 15) {
            checkWinner()
        }
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
    countMovimentos++
}

// Função checa se venceu, verificando o numero minimo de movimentos, e verifica as torres
function checkWinner() {
    let torreFinal = move[1][0]
    let contagemDiscos = torreFinal.childElementCount
    console.log(contagemDiscos)
    if (contagemDiscos == 4) {
        alert('Winner!')
        stopTimer()
    } else {
        alert('Movimentos mínimos utrapassados!')
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

    stopTimer()
    const torreStart = document.getElementById('tStart')
    torreStart.addEventListener('click', tempo, {once: true})

    const pontos = document.getElementById('mov')
    countMovimentos = 0
    pontos.innerHTML = '0';

}

////////////////////// FUNÇÃO PRINCIPAL /////////////////
window.onload = main
function main() {

    criarTorres()

    criarDiscos()
    
    const towers = document.getElementById('towers')
    towers.addEventListener('click', moveDisco)

    const torreStart = document.getElementById('tStart')
    torreStart.addEventListener('click', tempo, {once: true})

    const restart = document.getElementById('restart')
    restart.addEventListener('click', resetGame)
}