import Beverage from '../beverage';

export default class latte extends Beverage {
    constructor() {
        super();
        this.description = 'latte'
    }

    cost() {
        switch (this.getSize()) {
            case 'Small':
                return 3;
            case 'Medium':
                return 3.9;
            case 'Big':
                return 4.8;
            default:
                throw new Error('Magnitude must be a valid magnitude');
        }
    }
}