import { ProxyState } from "../AppState.js"
import { ActivePokemon } from "../Models/ActivePokemon.js"
import { PokeApiPokemon } from "../Models/PokeApiPokemon.js"
import { pokeApi } from "./AxiosService.js"

class PokeApiPokemonsService{

  async getPokemon(){
    let res = await pokeApi.get('/pokemon')
    ProxyState.pokeApiPokemon = res.data.results.map(p => new PokeApiPokemon(p))
  }

  async setActivePokemon(url){
    let res = await pokeApi.get(url)
    ProxyState.activePokemon = new ActivePokemon(res.data)
  }
}

export const pokeApiPokemonsService = new PokeApiPokemonsService()