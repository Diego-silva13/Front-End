import { useState } from "react"

function FormImc() {
    // variáveis
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [msg, setMsg] = useState(null)

    return (
        <div>
            <h2>Cálculo do IMC</h2>
        </div>
    )
}

export default FormImc
