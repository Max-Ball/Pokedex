import { ProxyState } from "../AppState.js"
import { caughtPokemonsService } from "../Services/CaughtPokemonsService.js"
import { Pop } from "../Utils/Pop.js"

function _draw(){
  let template = ''
  ProxyState.caughtPokemon.forEach(p => template += p.caughtTemplate)
  document.getElementById('caught-pokemon').innerHTML = template
  console.log('working?');
}

export class CaughtPokemonsController{
  constructor(){
    ProxyState.on('caughtPokemon', _draw)
  }

  async catchPokemon(){
    try {
      await caughtPokemonsService.catchPokemon()
    } catch (error) {
      console.error('[catching pokemon]', error)
      Pop.error(error)
    }
  }
}