const JsxExemplos = () => {
    //Declaração de variáveis
    const userName = 'Isabelly'

    //Objeto usuário
    const user = {
        name: 'Matheus',
        lastname : 'Lara'
    }

    //Funções
    function saudacao(name) {
        return `Olá, ${name}`
    }

    return (
        <div>
            <h2>Diversos Exemplos</h2>

            {/* Listar dados do usuário */}
            <p>Olá, {userName}!</p>
            <br />
            <p>Usuário: {user.name} {user.lastname}</p>
            <br />
            <p>Soma: {25 + 3}</p>
            <br />
            <p>{saudacao(userName)}</p>
            <p>{saudacao("José")}</p>

            {/* Botão */}
            <button onClick={ () => alert('Mensagem')}>Clique Aqui</button>
            <br />


        </div>
    )
}

export default JsxExemplos