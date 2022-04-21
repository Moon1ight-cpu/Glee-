import { DOM, WEEK_PRODUCTS, NEWS, BRANDS } from './view.js';







function createItem(item) {
    let div = DOM.ITEM_TEMPLATE.content.cloneNode(true);
    div.querySelector('.item__img').src = item.image;
    div.querySelector('.item__title').textContent = item.name;
    div.querySelector('.item__price').textContent = item.price;
    div.querySelector('.item__text').textContent = item.text;
    return div;
}
export function getListItems(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let item = createItem(array[i]);
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





export function addBrandAmount(array) {

    for (let index = 0; index < array.length; index++) {
        const element = `(${array[index].length})`;
        DOM.BRANDS_SPANS[index].append(element);
    }
}

