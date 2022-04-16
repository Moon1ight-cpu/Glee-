import { DOM } from './view.js';
import { getListItems } from './functions.js';


$(function () {
    $('.slider__content').slick({
        dots: true,
        arrows: false,
    })
});

DOM.WEEK_ITEMS.append(...getListItems())

