import Beverage from '../beverage';

export default class cappuccino extends Beverage {
    constructor() {
        super();
        this.description = 'cappuccino'
    }

    cost() {
        switch (this.getSize()) {
            case 'Small':
                return 3.8;
            case 'Medium':
                return 4.5;
            case 'Big':
                return 5.2;
            default:
                throw new Error('Magnitude must be a valid magnitude');
        }
    }
}