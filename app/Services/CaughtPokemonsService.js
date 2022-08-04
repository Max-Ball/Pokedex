import { ProxyState } from "../AppState.js"
import { CaughtPokemon } from "../Models/CaughtPokemon.js"
import { sandBoxApi } from "./AxiosService.js"



class CaughtPokemonsService{


  async catchPokemon(){
    if(ProxyState.caughtPokemon.find(p => p.name == ProxyState.caughtPokemon.name)){
      throw new Error('You already caught this dang ol\' pokemon')
    }
    console.log(ProxyState.caughtPokemon);
    let res = await sandBoxApi.post('/pokemon', ProxyState.activePokemon)
    let newPokemon = new CaughtPokemon(res.data)
    ProxyState.caughtPokemon = [...ProxyState.caughtPokemon, newPokemon]
  }
}

export const caughtPokemonsService = new CaughtPokemonsService()