import Beverage from '../beverage';

export default class frappuccino extends Beverage {
    constructor() {
        super();
        this.description = 'frappuccino'
    }

    cost() {
        switch (this.getSize()) {
            case 'Small':
                return 7.5;
            case 'Medium':
                return 8.8;
            case 'Big':
                return 10;
            default:
                throw new Error('Magnitude must be a valid magnitude');
        }
    }
}