function StrengthIndicator({ password }) {
    const checkStrength = () => {
      let score = 0
      if (password.length >= 8) score++
      if (/[A-Z]/.test(password)) score++
      if (/[a-z]/.test(password)) score++
      if (/[0-9]/.test(password)) score++
      if (/[^A-Za-z0-9]/.test(password)) score++
  
      if (score <= 2) return "Poco segura"
      if (score === 3 || score === 4) return "Segura"
      return "Muy segura"
    }
  
    return (
      <div>
        <p>Fortaleza: <strong>{checkStrength()}</strong></p>
      </div>
    )
  }
  
  export default StrengthIndicator
  
