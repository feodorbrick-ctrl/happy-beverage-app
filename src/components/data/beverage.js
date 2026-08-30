export default class Beverage {
    description = 'Unknow Beverage'
    size = 'Medium'

    getDescription() {
        return this.description;
    }

    getSize() {
        return this.size;
    }

    cost() {
        return 0
    }
}