import { useEffect, useState } from 'react'

// endpoind que se usara para el fetch
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENPOINT_IMAGE_URL = 'https://cataas.com/cat/says/hello'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  // cada vez que se renderice  cuando se carge la pagina
  // separamos los efects por distintos para evitar anidaciones
  // useEffect(() => {
  //   fetch(CAT_ENDPOINT_RANDOM_FACT)
  //     .then(res => res.json())
  //     .then(data => {
  //       const { fact } = data
  //       setFact(fact)

  //       const firstWorld = fact.split(' ').slice(0, 3).join(' ')
  //       setImageUrl(`https://cataas.com/cat/says/${firstWorld}`)
  //     })
  //     .catch(error => console.error('Error fetching fact:', error))
  // },[ ] )\
  // useEfecct para optener las palabras del endpoin y guardarlas todas en fact
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, []) // aqui se coloca dependencias que se puedan a llegar a cambiar como eventos onclick
  // recuperacion de imagen cada vez que tenemos una cita nueva

  // se agrego para el botton refresque
  useEffect(() => {
    if (!fact) return
    const firstWorld = fact.split(' ').slice(0, 3).join(' ')
    setImageUrl(`https://cataas.com/cat/says/${firstWorld}`)
  }, [fact])

  const handleClick = () => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
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
