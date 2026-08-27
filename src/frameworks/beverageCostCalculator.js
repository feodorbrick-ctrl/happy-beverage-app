export class beverageCostCalculator {
    constructor(beverage, condiments = []) {
        this.beverage = beverage;
        this.condiments = condiments;
    }

    calculateCost() {
        let totalCost = this.beverage
        for (let i = 0; i < this.condiments.length - 1; i++) {
            totalCost = this.condiments[0](this.beverage)
        }
        return totalCost.cost();
    }
}