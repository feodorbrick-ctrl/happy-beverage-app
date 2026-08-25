import Beverage from '../beverage';

export default class espresso extends Beverage {
    constructor() {
        super();
        this.description = 'espresso'
    }

    setMagnitude (magnitude) {
        let magnitudeLowerCase = magnitude.toLowerCase();

        switch (magnitudeLowerCase) {
            case 'big':
                this.magnitude = 'Big';
                break;
            case 'medium':
                this.magnitude = 'Medium';
                break;
            case 'small':
                this.magnitude = 'Small';
                break;
            default:
                this.magnitude = 'Small';
        }
    }

    cost() {
        switch (this.getMagnitude()) {
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