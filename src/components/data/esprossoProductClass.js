import Beverage from './abstracClassBeverage';

export default class espresso extends Beverage {
    constructor() {
        super();
        this.description = 'Unknow Beverage'
    }
    cost() {
        switch (this.getMagnitude()) {
            case 'small':
                return 1.2;
            case 'medium':
                return 2;
            case 'big':
                return 2.8;
        }
    }
}