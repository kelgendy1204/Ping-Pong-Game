import { gameHeight, gameBorder, gameWidth } from './constants';

export default class Ball {
    constructor() {
        this.element = document.getElementById('ball');
        this.diameter = 30;
        this.setInitialPosition();
    }

    setInitialPosition() {
        const position = {
            top  : (((gameHeight - gameBorder) * 2) / 2) - (this.diameter / 2),
            left : (((gameWidth - gameBorder) * 2) / 2) - (this.diameter / 2)
        };
        this.setPosition(position);
    }

    setPosition({ top, left }) {
        if(!isNaN(left)) {
            this.left = left;
        }
        if(!isNaN(top)) {
            this.top = top;
        }
        this.renderPosition();
    }

    renderPosition() {
        console.log('rendered');
    }
};
