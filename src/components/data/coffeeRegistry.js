import espresso from "./coffees/espressoProduct";
import americano from "./coffees/americanoProduct";
import latte from "./coffees/latteProduct";
import frappuccino from "./coffees/frapuchinoProduct";
import cappuccino from "./coffees/capuchinoProduct";

export const CoffeeRegistry = {
    espresso: new espresso(),
    americano: new americano(),
    latte: new latte(),
    cappuccino: new cappuccino(),
    frappuccino: new frappuccino(),
}