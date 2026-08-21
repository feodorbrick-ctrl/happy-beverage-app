import CondimentDecorator from "../anstractCondimentDecorator";

export default class Sugar extends CondimentDecorator {
    constructor(beverage) {
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