

export class PokeApiPokemon{
  constructor(data){
    this.name = data.name
    this.url = data.url
  }

  get Template(){
    return `
    <div class="selectable no-select border bg-light rounded my-2 p-1" onclick="app.pokeApiPokemonsController.setActivePokemon('${this.url}')">
    <h4>
      ${this.name}
    </h4>
  </div>
    `
  }
}