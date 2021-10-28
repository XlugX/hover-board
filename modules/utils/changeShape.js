export function removeShape(items, element) {
    items.forEach(item => {
        if (element.classList.contains(item.id)) {
            element.classList.remove(item.id);
        };
    });
};

export function addShape(item, selector) {
    item.classList.add(selector);
};