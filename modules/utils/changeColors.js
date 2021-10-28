export function removeColor(child) {
    child.style.backgroundColor = '#404952';
    child.style.boxShadow = '0 0 2px #3a4853';
};

const setRandomColor = (colors) => {
    const index = Math.floor(Math.random() * colors?.length);

    return colors[index];
};

export function setColor(child, colors) {
    const color = setRandomColor(colors);
    child.style.backgroundColor = color;
    child.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};
