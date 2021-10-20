function convert(){
    let n = Number(document.getElementById('n').value)
    let dolar = n / 5.60
    let saida = document.getElementById('saida')
    saida.innerHTML = `O valor de R$${n} é de USD$${dolar}`
    return false
}