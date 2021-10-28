import { addActiveClass, removeActiveClass } from './utils/changeClasses.js';
import { addShape, removeShape } from './utils/changeShape.js';

const tabs = document.querySelectorAll('.item'),
    tabsParent = document.querySelector('.actions');


function setShape(board) {
    tabsParent.addEventListener('click', (e) => {
        if (e?.target && e?.target?.classList.contains('item')) {
            tabs.forEach(item => {
                if (e.target == item) {
                    removeActiveClass(tabs);
                    addActiveClass(item);
                    removeShape(tabs, board);
                    addShape(board, item?.id)
                };
            });
        };
    });
};

export default setShape;