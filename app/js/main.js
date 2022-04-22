import { BRANDS, DOM, WEEK_PRODUCTS } from './view.js';
import { getListItems, getNewsList, addBrandAmount } from './functions.js';


$(function () {
    $('.slider__content').slick({
        dots: true,
        arrows: false,
    })

    $(".filter__price-input").ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function (data) {
            $('.filter__price-min').text('$' + data.from + '.00'),
                $('.filter__price-max').text('$' + data.to + '.00')
        },
        onChange: function (data) {
            $('.filter__price-min').text('$' + data.from + '.00'),
                $('.filter__price-max').text('$' + data.to + '.00')
        },
    });

    $(".item__stars").rateYo({
        starWidth: "18px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        spacing: "13px",
        readOnly: true
    });

    $(".filter__recent-products-item-stars").rateYo({
        starWidth: "11px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        spacing: "8px",
        readOnly: true
    });

    $('.shop-content__filter-btn').on('click', function () {
        $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
        $(this).addClass('shop-content__filter-btn--active');
    })

    $('.button-list').on('click', function () {
        $('.item').addClass('item--list');
    })
    $('.button-grid').on('click', function () {
        $('.item').removeClass('item--list');
    })
});




try {
    if (location.href == 'http://localhost:3000/index.html' || location.href == 'http://localhost:3000/') {
        DOM.WEEK_ITEMS.append(...getListItems(WEEK_PRODUCTS));
    }

    if (location.href == 'http://localhost:3000/index.html' ||
        location.href == 'http://localhost:3000/' ||
        location.href == 'http://localhost:3000/about.html' ||
        location.href == 'http://localhost:3000/contact.html') {
        DOM.NEWS_ITEMS.append(...getNewsList());
    }

    if (location.href == 'http://localhost:3000/shop.html') {
        addBrandAmount(BRANDS);
        DOM.SHOP_ITEMS.append(...getListItems(BRANDS[0]));
    }
} catch (err) {
    console.log(err);
}


