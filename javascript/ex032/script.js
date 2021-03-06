let saida = document.getElementById("saida")
let titulo = document.getElementById("titulo")
let frase = document.getElementById("frase")

saida.style.visibility = "hidden"

function fechar(){
    saida.style.visibility = "hidden"
}

function operar(){
    let v1 = Number(document.getElementById("v1").value)
    let v2 = Number(document.getElementById("v2").value)
    let opc = Number(document.getElementById("opc").value)

    switch (op){
        case 1:
            titulo.innerHTML = `Somatório entre ${v1} e ${v2}`
            frase.innerHTML = `O resultado ${v1} + ${v2} = ${v1+v2}`
            break
            case 2:
                titulo.innerHTML = `Subtração entre ${v1} e ${v2}`
                frase.innerHTML = `O resultado ${v1} - ${v2} = ${v1-v2}`
                break
            case 3: 
                titulo.innerHTML = `Multiplicação entre ${v1} e ${v2}`
                frase.innerHTML = `O resultado ${v1} * ${v2} = ${v1*v2}`
            case 4:
                titulo.innerHTML = `Divisão entre ${v1} e ${v2}`
                if(v2 == 0){
                    frase.innerHTML = `Não é possivel realizar divisão por zero.`
                } else{
                    frase.innerHTML = `O resultado ${v1} / ${v2} = ${v1/v2}`
                }
                break
            default:
                titulo.innerHTML = `Opção Inválida`
                frase.innerHTML = `A sua opção de operação não existe. Tente Novamente.`
    }
    saida.style.visibility = "visible"
    return false
}