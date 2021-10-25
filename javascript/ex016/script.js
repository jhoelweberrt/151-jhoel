let frase = document.getElementById('frase')
let res = document.getElementById('resultado')

function fumante(){
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)

    let min = n1 * 365 * n2
    let horas = min/60
    let dias = horas/24

    frase.innerHTML = `Uma pessoa que fuma ${n1} cigarros por dia, há ${n2} anos já perdeu <strong> ${horas.toFixed(1)} horas de vida</strong> Isso corresponde a ${dias.toFixed(1)} dias a menos. `

}