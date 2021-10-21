let frase = document.getElementById('frase')
let res = document.getElementById('resultado')


function salario(){
let nome = document.getElementById('nome').value
let n = Number(document.getElementById('n').value)
let aum = Number(document.getElementById('aument').value)

let aumento = n * aum / 100

let novo = n + aumento
frase.innerHTML = `O funcionário <strong>${nome}</strong> tinha o sálario de R$${n.toFixed(2)}. Com um aumento de ${aum}%, o salário vai aumentar R$${aumento.toFixed(2)} e vai passar a ser de <strong>R$${novo.toFixed(2)}</strong>.`

return false
}