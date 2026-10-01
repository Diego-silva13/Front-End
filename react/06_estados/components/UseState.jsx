import { useState } from "react";

import react from 'react'

const UseState = () => {

    const [user, setUser] = useState({
        nome: "Emanuelly",
        idade: 17,
        hobbies: ["Conversar", "Celular"]
    }) 

    return (
        <div>
          <p>Nome: {user.nome}</p>
          <p>Hobbies: {user.hobbies}</p>
          <p>Idade: {user.idade}</p>
        </div>
    )
}

export default UseState