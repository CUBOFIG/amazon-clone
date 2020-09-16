import React, { useState, useEffect } from 'react'
import Mostar from './Mostrar'

const Cambio = () => {

  const [Numero, setNumero] = useState(0)

  const alto = () => {
    const valor = Numero + 1
    setNumero(valor)
  }

  const bajo = () => {
    const valor = Numero - 1
    setNumero(valor)
  }
  const actualizar = (event) => {
    setNumero(parseInt(event.target.value))
  }
  useEffect(() => {
    console.log(Numero)
  }, [Numero])

  return (
    <div>
      <button onClick={bajo}>MENOS</button>
      <input type="text" onChange={alto} />
      <button onClick={alto}>MÁS</button>
      <Mostar valor={Numero} />
    </div>
  )
}

export default Cambio
