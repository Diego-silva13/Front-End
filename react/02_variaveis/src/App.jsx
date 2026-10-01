import './App.css'
function App() {
  
//  Declaração de variáveis 
  const nome = 'Pedro'
  const idade = '18'
  const cidade ='São Paulo-SP'
  
  function soma(a, b) {
    return a + b
  }

  const url = 'https://placehold.co/200'
  
  return (
    <div className='App'>
      <h2>Bem-vindo ao React!</h2>
      <p>Olá, {nome}! </p>
      <p>Idade: {idade}</p>
      <p>Cidade: {cidade}</p>

      <br />

      <p>Soma: {soma(10, 33)}</p>

      <br />
      <h2>Exibir uma imagem</h2>
      <img src={url} alt="Imagem" />

    </div>
  )
}

export default App
