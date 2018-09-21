import Player from './player';
import Ball from './ball';

new Player({
    element: 'player1',
    leftKeyCode: 37,
    rightKeyCode: 39
});

new Player({
    element: 'player2',
    leftKeyCode: 65,
    rightKeyCode: 83
});

new Ball();
