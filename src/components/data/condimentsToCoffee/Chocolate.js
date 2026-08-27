import CondimentDecorator from "../condimentDecorator";
import Beverage from "../beverage";

export default class Chocolate extends CondimentDecorator {
    constructor(beverage = new Beverage) {
        super();
        this.beverage = beverage
    }
    cost() {
        return 1 + this.beverage.cost()
    }
    getDescription() {
        return this.beverage.getDescription() + ' with chocolate'
    }
}