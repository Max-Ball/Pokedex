
export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  setTimeout: 8000
})

export const sandBoxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/max',
  setTimeout: 8000
})