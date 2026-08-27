import CondimentDecorator from "../condimentDecorator";
import Beverage from "../beverage";

export default class Sugar extends CondimentDecorator {
    constructor(beverage = new Beverage) {
        super();
        this.beverage = beverage
    }
    cost() {
        return 0.5 + this.beverage.cost()
    }
    getDescription() {
        return this.beverage.getDescription() + ' with sugar'
    }
}