import Beverage from '../abstractBeverage';

export default class americano extends Beverage {
    constructor() {
        super();
        this.description = 'americano'
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