import CondimentDecorator from "../condimentDecorator";

export default class Mocha extends CondimentDecorator {
    constructor(beverage) {
        super();
        this.beverage = beverage
    }
    cost() {
        return 1.5 + this.beverage.cost()
    }
    getDescription() {
        return this.beverage.getDescription() + ' with mocha'
    }
}