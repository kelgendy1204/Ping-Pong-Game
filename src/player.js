import { gameBorder, gameWidth } from './constants';

export default class Player {
    constructor(id) {
        this.element = document.getElementById(id);
        this.width = 150;
        this.setInitialPosition();
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
}
