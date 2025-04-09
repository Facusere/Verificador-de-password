function PasswordInput({ password, setPassword, show, toggleShow }) {
    return (
      <div>
        <input
          type={show ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresá tu contraseña"
        />
        <button onClick={toggleShow}>
          {show ? "Ocultar" : "Mostrar"}
        </button>
      </div>
    )
  }
  
  export default PasswordInput
  