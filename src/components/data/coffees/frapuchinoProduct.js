import Beverage from '../beverage';

export default class frappuccino extends Beverage {
    constructor() {
        super();
        this.description = 'frappuccino'
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