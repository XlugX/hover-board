export function removeActiveClass(items) {
    items.forEach(item => item.classList.remove('active'));
};

export function addActiveClass(item) {
    item.classList.add('active');
};