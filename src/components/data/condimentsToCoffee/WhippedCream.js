import CondimentDecorator from "../anstractCondimentDecorator";

export default class WhippedCream extends CondimentDecorator {
    constructor(beverage) {
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