import { ProxyState } from "../AppState.js";
import { pokeApiPokemonsService } from "../Services/PokeApiPokemonsService.js";
import { Pop } from "../Utils/Pop.js";

function _draw(){
  let template = ''
  let pokemon = ProxyState.pokeApiPokemon
  pokemon.forEach(p => template += p.Template)
  document.getElementById('poke-api').innerHTML = template
}

export class PokeApiPokemonsController{
constructor(){
  console.log('from the controller');
  ProxyState.on('pokeApiPokemon', _draw)
  this.getPokemon()
}

async getPokemon(){
  try {
    await pokeApiPokemonsService.getPokemon()
  } catch (error) {
    console.error('[getting Pokemon]', error)
    Pop.error(error)
  }
}

async setActivePokemon(url){
  try {
    await pokeApiPokemonsService.setActivePokemon(url)
  } catch (error) {
    console.error('[active pokemon]', error)
    Pop.error(error)
  }
}

}