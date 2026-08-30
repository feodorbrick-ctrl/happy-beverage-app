export class beverageCostCalculator {
    constructor(beverage, condiments = []) {
        this.beverage = beverage;
        this.condiments = condiments;
    }

    setBeverageAndCondiments(beverage = this.beverage, condiments = this.condiments) {
        this.condiments = condiments;
        this.beverage = beverage;
    }

    calculateCost() {
        let totalCost = this.beverage
        for (let i = 0; i < this.condiments.length; i++) {
            totalCost = new this.condiments[i](totalCost)
        }
        return totalCost.cost();
    }
}