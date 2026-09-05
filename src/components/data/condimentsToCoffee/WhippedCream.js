import CondimentDecorator from "../condimentDecorator";
import Beverage from "../beverage";

export default class WhippedCream extends CondimentDecorator {
    constructor(beverage = new Beverage()) {
        super();
        this.beverage = beverage
    }
    cost() {
        return 1.5 + this.beverage.cost()
    }
    getDescription() {
        return this.beverage.getDescription() + ' with whipped cream';
    }
}