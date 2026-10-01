function mostrarmsg() {

    // declaração das variáveis
    let nome = document.getElementById('nome').value
    let idade = parseInt(document.getElementById('idade').value)
    let cidade = document.getElementById('cidade').value

    // mensagem
     resultado = "Nome: " + nome + "<br>Idade: " + idade + "<br>Cidade: " + cidade

    // exibir o resultado
    document.getElementById('resultado').innerHTML = resultado
}
