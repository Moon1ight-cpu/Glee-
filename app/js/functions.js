import { DOM, WEEK_PRODUCTS } from './view.js';


function createItem(item) {
    let div = DOM.ITEM_TEMPLATE.content.cloneNode(true);
    div.querySelector('.item__img').src = item.image;
    div.querySelector('.item__title').textContent = item.name;
    div.querySelector('.item__price').textContent = item.price;
    return div;
}

export function getListItems() {
    let result = [];

    for (let i = 0; i < WEEK_PRODUCTS.length; i++) {
        let item = createItem(WEEK_PRODUCTS[i]);
        result.push(item);
    }

    return result;
}