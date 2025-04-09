import { useState } from "react"

function AdvancedOptions({ setPassword }) {
  const [length, setLength] = useState(8)
  const [includeLower, setIncludeLower] = useState(true)
  const [includeUpper, setIncludeUpper] = useState(true)
  const [includeNumber, setIncludeNumber] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  const generatePassword = () => {
    let chars = ""
    if (includeLower) chars += "abcdefghijklmnopqrstuvwxyz"
    if (includeUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (includeNumber) chars += "0123456789"
    if (includeSymbols) chars += "!@#$%^&*()_+[]{}|;:,.<>?"

    let pass = ""
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    setPassword(pass)
  }

  return (
    <div>
      <h3>Generador avanzado de contraseñas</h3>
      <label>
        Longitud: <input type="number" value={length} min={8} onChange={e => setLength(e.target.value)} />
      </label>
      <br />
      <label>
        <input type="checkbox" checked={includeLower} onChange={() => setIncludeLower(prev => !prev)} />
        Incluir minúsculas
      </label>
      <br />
      <label>
        <input type="checkbox" checked={includeUpper} onChange={() => setIncludeUpper(prev => !prev)} />
        Incluir mayúsculas
      </label>
      <br />
      <label>
        <input type="checkbox" checked={includeNumber} onChange={() => setIncludeNumber(prev => !prev)} />
        Incluir números
      </label>
      <br />
      <label>
        <input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(prev => !prev)} />
        Incluir símbolos
      </label>
      <br />
      <button onClick={generatePassword}>Generar contraseña</button>
    </div>
  )
}

export default AdvancedOptions
