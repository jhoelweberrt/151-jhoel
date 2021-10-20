let frase = document.getElementById('frase')
let res = document.getElementById('resultado')
function fechar(){
    res.style.visibility = 'hidden'
}
function calc(){
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    let a = n1 * n2
    frase.innerHTML = `Uma parede com ${n1}x${n2} metros vai ter uma <strong>área total de ${a}m<sup>2</sup></strong>`
    let tinta = a / 2 
    frase.innerHTML += `<p>Para cobrir essa área, será necessário um total de <strong>${tinta} litros</strong> de tinta.</p>`
    res.style.visibility = 'visible'
    return false
}