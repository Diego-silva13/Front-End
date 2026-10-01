function calcular() {

    // declaração das variaveis 
    let n1 = parseInt(document.getElementById('n1').value)
    let n2 = parseInt(document.getElementById('n2').value)

    // soma
    soma = n1 + n2

     //exibir os resultado
    document.getElementById('resultado').innerHTML = `Resultado: ${soma}`
}