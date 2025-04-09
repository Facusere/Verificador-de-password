import { useState } from 'react';
import PasswordInput from './components/PasswordInput';
import StrengthIndicator from './components/StrengthIndicator';
import AdvancedOptions from './components/AdvancedOptions';

function App() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [copied, setCopied] = useState(false)
  const [advancedVisible, setAdvancedVisible] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Verificador de Fortaleza de Contraseña 🔐</h1>
      
      <PasswordInput
        password={password}
        setPassword={setPassword}
        show={showPassword}
        toggleShow={() => setShowPassword(prev => !prev)}
      />

      <StrengthIndicator password={password} />

      <button onClick={handleCopy}>Copiar contraseña</button>
      {copied && <p>¡Contraseña copiada!</p>}

      <button onClick={() => setAdvancedVisible(prev => !prev)}>
        {advancedVisible ? "Ocultar opciones avanzadas" : "Mostrar opciones avanzadas"}
      </button>

      {advancedVisible && (
        <AdvancedOptions setPassword={setPassword} />
      )}
    </div>
  )
}

export default App

