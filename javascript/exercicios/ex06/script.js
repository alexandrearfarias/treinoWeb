let contador = 0
 let res = document.querySelector('section#resultado')

function conta(){
    contador ++
    res.innerHTML = `<p>O botão foi apertado ${contador} vezes até agora!</p>`
}
function zerar(){
    contador = 0
    res.innerHTML = `<p> O contador agora foi zerado!</p>`
}