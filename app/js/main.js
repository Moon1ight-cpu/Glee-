$(function () {
    $('.slider__content').slick({
        dots: true,
        arrows: false,
    })
});

const DOM = {
    WEEK_ITEMS: document.querySelector('.week__items'),
    ITEM_TEMPLATE: document.querySelector('#item-template'),
}

const WEEK_PRODUCTS = [
    { name: 'Wooden radio', price: '$29.00', image: 'images/products/week/product-1.png' },
    { name: 'Wooden chair', price: '$29.00', image: 'images/products/week/product-2.png' },
    { name: 'White chair', price: '$29.00', image: 'images/products/week/product-3.png' },
    { name: 'Retro table', price: '$29.00', image: 'images/products/week/product-4.png' },
    { name: 'Wooden radio', price: '$29.00', image: 'images/products/week/product-5.png' },
    { name: 'Wooden chair', price: '$29.00', image: 'images/products/week/product-6.png' },
    { name: 'White chair', price: '$29.00', image: 'images/products/week/product-7.png' },
    { name: 'Retro table', price: '$29.00', image: 'images/products/week/product-8.png' },
]


function createItem(item) {
    let div = DOM.ITEM_TEMPLATE.content.cloneNode(true);
    div.querySelector('.item__img').src = item.image;
    div.querySelector('.item__title').textContent = item.name;
    div.querySelector('.item__price').textContent = item.price;
    return div;
}
function getListItems() {
    let result = [];

    for (let i = 0; i < WEEK_PRODUCTS.length; i++) {
        let item = createItem(WEEK_PRODUCTS[i]);
        result.push(item);
    }

    return result;
}

DOM.WEEK_ITEMS.append(...getListItems())

