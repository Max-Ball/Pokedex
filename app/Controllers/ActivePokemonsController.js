import { ProxyState } from "../AppState.js";

function _draw(){
  document.getElementById('active-pokemon').innerHTML = ProxyState.activePokemon.activePokemonTemplate
  console.log('this coming through?');
}
export class ActivePokemonsController{
  constructor(){
    ProxyState.on('activePokemon', _draw)
  }
}