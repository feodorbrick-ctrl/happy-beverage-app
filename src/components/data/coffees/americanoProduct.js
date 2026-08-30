import Beverage from '../beverage';

export default class americano extends Beverage {
    constructor() {
        super();
        this.description = 'americano'
    }

    cost() {
        switch (this.getSize()) {
            case 'Small':
                return 3.6;
            case 'Medium':
                return 4.1;
            case 'Big':
                return 4.60;
            default:
                throw new Error('Magnitude must be a valid magnitude');
        }
    }
}