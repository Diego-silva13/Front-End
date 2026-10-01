// importação do useState 
import { useState } from "react";
// useState(0): iniciar a função em valor 0
// setCount: função para atualizar o valor 

function Contador() {
    const [count, setCount] = useState(0)
    return (
        <div>
             <h1>Contador: {count}</h1>

             <button onClick={() => setCount(count + 1)}>
                 aumentar
             </button>

             <button onClick={() => setCount(count - 1)}>
                 diminuir
             </button>

             <button onClick={() => setCount(0)}>
                 Zerar
             </button>
        </div>
    )
}

export default Contador