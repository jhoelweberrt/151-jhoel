let resultado = document.getElementById('resultado')
let frase = document.getElementById('frase')

function esconder(){
    resultado.style.visibility = 'hidden'
}
function convert(){
    let n = Number(document.getElementById('n').value)
    let dolar = n / 5.14
    frase.innerHTML = `O valor de R$${n.toFixed(2)} é de USD$${dolar.toFixed(2)}`
    resultado.style.visibility = 'visible'
    return false
}