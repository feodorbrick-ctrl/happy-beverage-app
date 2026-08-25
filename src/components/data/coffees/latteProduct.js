import Beverage from '../beverage';

export default class latte extends Beverage {
    constructor() {
        super();
        this.description = 'latte'
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