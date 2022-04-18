import { DOM, WEEK_PRODUCTS, NEWS } from './view.js';







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








function createNews(item) {
    let div = DOM.NEWS_TEMPLATE.content.cloneNode(true);
    div.querySelector('.articles__item-img').src = item.image;
    div.querySelector('.articles__item-title').textContent = item.title;
    div.querySelector('.articles__item-date').textContent = item.date;
    div.querySelector('.articles__item-published').textContent = item.published;
    return div;
}
export function getNewsList() {
    let result = [];

    for (let i = 0; i < 3; i++) {
        let item = createNews(NEWS[i]);
        result.push(item);
    }

    return result;
}
