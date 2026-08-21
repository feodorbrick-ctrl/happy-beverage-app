import CondimentDecorator from "../anstractCondimentDecorator";

export default class Chocolate extends CondimentDecorator {
    constructor(beverage) {
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