import { PokeApiPokemonsController } from "./Controllers/PokeApiPokemonsController.js";
import { ActivePokemonsController } from "./Controllers/ActivePokemonsController.js";
import { CaughtPokemonsController } from "./Controllers/CaughtPokemonsController.js";


class App {
  // valuesController = new ValuesController();
  pokeApiPokemonsController = new PokeApiPokemonsController()
  activePokemonsController = new ActivePokemonsController()
  caughtPokemonsController = new CaughtPokemonsController()
}

window["app"] = new App();
