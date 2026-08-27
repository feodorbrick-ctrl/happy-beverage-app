export class beverageCostCalculator {
    constructor(beverage, condiments = []) {
        this.beverage = beverage;
        this.condiments = condiments;
    }

    calculateCost() {
        let totalCost = this.beverage
        for (let i = 0; i < this.condiments.length; i++) {
            totalCost = new this.condiments[i](totalCost)
        }
        return totalCost.cost();
    }
}