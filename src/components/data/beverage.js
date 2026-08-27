export default class Beverage {
    description = 'Unknow Beverage'
    magnitude = 'Medium'

    getDescription() {
        return this.description;
    }

    getMagnitude() {
        return this.magnitude;
    }

    cost() {
        return 0
    }
}