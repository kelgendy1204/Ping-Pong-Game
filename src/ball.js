import { gameHeight, gameBorder, gameWidth } from './constants';

export default class Ball {
    constructor() {
        this.element = document.getElementById('ball');
        this.diameter = 30;
        this.XDirection = 1;
        this.YDirection = 1;
        this.setInitialPosition();
        // this.move();
    }

    setInitialPosition() {
        const position = {
            top  : ((gameHeight - (gameBorder * 2)) / 2) - (this.diameter / 2),
            left : ((gameWidth - (gameBorder * 2)) / 2) - (this.diameter / 2)
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
        if(!isNaN(left) || !isNaN(top)) {
            this.renderPosition();
        }
    }

    renderPosition() {
        this.element.style.transform = `translate(${this.left}px, ${this.top}px)`;
    }

    move() {
        const maxLeft = gameWidth - (gameBorder * 2) - this.diameter;
        const maxTop = gameHeight - (gameBorder * 2) - this.diameter;

        let XIncrementValue = 15;
        let YIncrementValue = 5;

        const top = this.top + (YIncrementValue * this.YDirection);
        const left = this.left + (XIncrementValue * this.XDirection);

        if(top > maxTop) {
            this.YDirection = -1;
        } else if (top < 0) {
            this.YDirection = 1;
        }

        if(left > maxLeft) {
            this.XDirection = -1;
        } else if (left < 0) {
            this.XDirection = 1;
        }

        const newPosition = {
            top: this.top + YIncrementValue * this.YDirection,
            left: this.left + XIncrementValue * this.XDirection
        };

        this.setPosition(newPosition);
        requestAnimationFrame(this.move.bind(this));
    }
}
