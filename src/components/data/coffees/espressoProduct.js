import Beverage from '../beverage';

export default class espresso extends Beverage {
    constructor() {
        super();
        this.description = 'espresso'
    }

    cost() {
        switch (this.getSize()) {
            case 'Small':
                return 1.2;
            case 'Medium':
                return 2.1;
            case 'Big':
                return 2.8;
            default:
                throw new Error('Magnitude must be a valid magnitude');
        }
    }
}