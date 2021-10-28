import { setColor, removeColor } from './utils/changeColors.js';

const BOARD_SIZE = 500;
const colors = ['#9e30bd', '#c7047e', '#1d38e2', '#01e336', '#e7db16', '#fc6400', '#d40a0a', '#7FFFD4FF'];

function setSquare(board) {
    for (let i = 0; i < BOARD_SIZE; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.addEventListener('mouseover', () => setColor(square, colors));
        square.addEventListener('mouseleave', () => removeColor(square));

        board.append(square);
    };
};

export default setSquare;