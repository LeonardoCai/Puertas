import React from 'react'

const Card = ({personajes}) => {
  

  return (
    <div>
      <h3>Su personaje se llama : {personajes.nombre} </h3>
      <h3>Su poder es:  {personajes.poder}</h3>
      <h3>Transformacion: {personajes.transformacion}</h3>
      <h3>Raza: {personajes.raza}</h3>
    
    </div>
  )
}

export default Card