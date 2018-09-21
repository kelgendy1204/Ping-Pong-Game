import { gameBorder, gameWidth } from './constants';

export default class Player {
    constructor({ element: id, leftKeyCode, rightKeyCode }) {
        this.element = document.getElementById(id);
        this.width = 150;
        this.setInitialPosition();
        this.handleMovement();
        this.leftKey = { code: leftKeyCode, pressed: false };
        this.rightKey = { code: rightKeyCode, pressed: false };
    }

    setInitialPosition() {
        const position = {
            left : ((gameWidth - (gameBorder * 2)) / 2) - (this.width / 2)
        };
        this.setPosition(position);
    }

    setPosition({ left }) {
        if(!isNaN(left)) {
            this.left = left;
            this.renderPosition();
        }
    }

    renderPosition() {
        this.element.style.transform = `translate(${this.left}px)`;
    }

    handleMovement() {
        window.addEventListener('keydown', event => {
            if(event.keyCode === this.leftKey.code && !this.leftKey.pressed) {
                this.leftKey.pressed = true;
                this.move(-15);
            }

            if(event.keyCode === this.rightKey.code && !this.rightKey.pressed) {
                this.rightKey.pressed = true;
                this.move(15);
            }
        }, this);

        window.addEventListener('keyup', event => {
            if(event.keyCode === this.leftKey.code && this.leftKey.pressed) {
                this.leftKey.pressed = false;
                this.cancelMove(-15);
            }

            if(event.keyCode === this.rightKey.code && this.rightKey.pressed) {
                this.rightKey.pressed = false;
                this.cancelMove(15);
            }
        }, this);
    }

    move(value) {
        const maxLeft = gameWidth - (gameBorder * 2) - this.width;
        if(value > 0) {
            this.rightAnimationFrame = requestAnimationFrame(this.move.bind(this, value));
        } else {
            this.leftAnimationFrame = requestAnimationFrame(this.move.bind(this, value));
        }
        const left = this.left + value;
        if(left < 0) {
            this.setPosition({ left: 0 });
        } else if(left > maxLeft) {
            this.setPosition({ left: maxLeft });
        } else {
            this.setPosition({ left });
        }
    }

    cancelMove(value) {
        if(value > 0) {
            cancelAnimationFrame(this.rightAnimationFrame);
        } else {
            cancelAnimationFrame(this.leftAnimationFrame);
        }
    }
}
