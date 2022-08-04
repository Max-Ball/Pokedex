import { ActivePokemon } from "./ActivePokemon.js";


export class CaughtPokemon{
  constructor(data){
    this.id = data.id
    this.name = data.name
  }

  get caughtTemplate(){
    return `
    <div class="border bg-light rounded my-2 p-1 text-dark">
      <h4>
        ${this.name}
      </h4>
    </div>
    `
  }
}