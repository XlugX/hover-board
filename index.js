import setShape from './modules/setShape.js';
import setSquare from './modules/setSquare.js';

window.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('#board');

    setShape(board);
    setSquare(board);
});