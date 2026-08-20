import Beverage from '../abstractBeverage';

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