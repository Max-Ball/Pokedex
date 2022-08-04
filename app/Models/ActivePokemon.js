

export class ActivePokemon{
  constructor(data){
    this.id = data.id
    this.name = data.name
    this.height = data.height
    this.weight = data.weight
    // create function on caughtpokemonservice export service to model and input below
    this.types = data.types[0].type.name 
    this.moves = data.moves[0].move.name
    this.img = data.sprites.other.dream_world.front_default
  }

  get activePokemonTemplate(){
    console.log('this coming through?');
    return `
    <div class="row">
      <div class="col-md-10 text-center">
        <h1 class="m-5 border border-dark rounded border-5">${this.name}</h1>
        <img class="img-sprite" src="${this.img}" alt="" srcset="">
        <div class="m-5 border border-dark rounded border-5 p-3">
          <div class="row">
            <div class="col-md-6">
              <div class="text-start">
                <h5>
                  Height: ${this.height}
                </h5>
              </div>
              <div class="text-start">
                <h5>
                  Weight: ${this.weight} lbs.
                </h5>
              </div>
            </div>
            <div class="col-md-6">
              <div class="text-end">
                <h5>
                  Type: ${this.types}
                </h5>
              </div>
              <div class="text-end">
                <h5>
                  Moves: ${this.moves}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-2 text-end">
        <h3>#${this.id}</h3>
        <button class="btn btn-primary" onclick="app.caughtPokemonsController.catchPokemon()">Catch Em All!</button>
      </div>
    </div>
  </div>
    `
  }
}