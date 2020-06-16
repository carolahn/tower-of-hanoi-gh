const first = []
const second = []
const third = []

// const discos = document.getElementById('disks')
const disco1 = document.getElementById('disc1')
const disco2 = document.getElementById('disc2')
const disco3 = document.getElementById('disc3')
const disco4 = document.getElementById('disc4')
// const disco1 = document.getElementsByClassName("primeiro")
// const disco2 = document.getElementsByClassName("segundo")
// const disco3 = document.getElementsByClassName("terceiro")
// const disco4 = document.getElementsByClassName("quarto")

let movimentos = 0
const wins = 0

let TowerStart = '' 
let TowerFinal = ''

// tower.addEventListener('click',funcao pegaDisco

// function pegaDisco{
//     qual é a torre? 
//         event.target.classList.contais(offset)
//         torre = document.getElementById
//     qual é o disco do topo?
//         disco = torre.lastElementChild
//         disco.clientWidth
//     movimentos [[torre, disco, tamanho do disco], [torre, disco, tamanho do disco]]

//     chama validaMove
//     chama displayMove
// }


////////////////////// Pegar o disco, para verificar se é possivel movê-lo /////////////////
// function pegarDisco() {
//     discos.addEventListener('click', function (evento) {
//         if (evento.target.classList.contains('primeiro')) {
//             console.log('primeiro selecionado')
//         }
//         if (evento.target.classList.contains('segundo')) {
//             console.log('segundo selecionado')
//         }
//         if (evento.target.classList.contains('terceiro')) {
//             console.log('terceiro selecionado')
//         }
//         if (evento.target.classList.contains('quarto')) {
//             console.log('quarto selecionado')
//         }
//     })
// }



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

    const DiscoSelecionado = pegarDisco() // variavel e função temporária apenas para testes.

    // condição falhando, deve ser consertada
    PrimeiroClick()
    if (towerStart !== '') {
        SegundoClick()
    }
    
    // verificarTorre
    // verificaDisco
    // moveDisc()

    // checkWinner()

    // resetGame()
    document.getElementById('restart').onclick = resetGame()
}