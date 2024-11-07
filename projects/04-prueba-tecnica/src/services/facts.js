const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = () => {
//
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then((res) => res.json())
    .then((data) => {
      const { fact } = data
      return fact // Devuelve el hecho para que pueda ser usado en el componente
    })
}
// export const getRandomFact = () => {

//   fetch(CAT_ENDPOINT_RANDOM_FACT)
//     .then((res) => res.json())
//     .then((data) => {
//       const { fact } = data
//       return fact
//     })
// }
