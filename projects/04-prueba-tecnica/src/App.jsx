import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  // recuperacion de cita de las palabras a mostrar que usara para la imagen
  useEffect(() => {
    getRandomFact().then(setFact)
  }, []) // aqui se coloca dependencias que se puedan a llegar a cambiar como eventos onclick
  // recuperacion de imagen cada vez que tenemos una cita nueva

  // se agrego para el botton refresque
  useEffect(() => {
    if (!fact) return
    const firstWorld = fact.split(' ').slice(0, 3).join(' ')
    setImageUrl(`https://cataas.com/cat/says/${firstWorld}`)
  }, [fact])

  const handleClick = () => {
    getRandomFact(setFact).then(newSetFact => setFact(newSetFact))
  }

  return (
    <main>
      <h1>app de gatos</h1>
      <button onClick={handleClick}>Get new</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='Renderizado de gatito' />}
    </main>
  )
}
