import { DOM } from './view.js';
import { getListItems, getNewsList } from './functions.js';


$(function () {
    $('.slider__content').slick({
        dots: true,
        arrows: false,
    })
});

if (location.href == 'http://localhost:3000/index.html') {
    DOM.WEEK_ITEMS.append(...getListItems());
}
DOM.NEWS_ITEMS.append(...getNewsList());

