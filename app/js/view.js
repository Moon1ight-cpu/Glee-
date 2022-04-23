export const DOM = {
    WEEK_ITEMS: document.querySelector('.week__items'),
    NEWS_ITEMS: document.querySelector('.articles__items'),
    SHOP_ITEMS: document.querySelector('.shop-content__items'),
    ITEM_TEMPLATE: document.querySelector('#item-template'),
    NEWS_TEMPLATE: document.querySelector('#articles-item'),
    
    BRANDS_SPANS: document.querySelectorAll('.filter__brand-amount'),
    BRANDS_BUTTONS: document.querySelectorAll('.filter__brand-btn'),
    BRANDS_ITEMS: document.querySelectorAll('.filter__brand-item'),
}

export const WEEK_PRODUCTS = [
    { id: 0, name: 'Wooden radio', price: '$29.00', image: 'images/products/week/product-1.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
    { id: 1, name: 'Wooden chair', price: '$29.00', image: 'images/products/week/product-2.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
    { id: 2, name: 'White chair', price: '$29.00', image: 'images/products/week/product-3.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
    { id: 3, name: 'Retro table', price: '$29.00', image: 'images/products/week/product-4.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
    { id: 4, name: 'Wooden radio', price: '$29.00', image: 'images/products/week/product-5.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
    { id: 5, name: 'Wooden chair', price: '$29.00', image: 'images/products/week/product-6.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
    { id: 6, name: 'White chair', price: '$29.00', image: 'images/products/week/product-7.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
    { id: 7, name: 'Retro table', price: '$29.00', image: 'images/products/week/product-8.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
]

export const NEWS = [
    {
        date: '  28 JANUARY, 2020',
        image: 'images/news/news-1.jpg',
        published: 'BY ADMIN',
        title: 'Diusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        date: '28 JANUARY, 2020',
        image: 'images/news/news-2.jpg',
        published: 'BY ADMIN',
        title: 'Aonsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore'
    },
    {
        date: '28 JANUARY, 2020',
        image: 'images/news/news-3.jpg',
        published: 'BY ADMIN',
        title: 'Rncididunt ut labore et dolore magna aliqua. Ut enim'
    }
]

export const BRANDS = [
    [
        { id: 0, name: 'Wooden radio', price: '$29.00', image: 'images/products/week/product-1.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 1, name: 'Wooden chair', price: '$29.00', image: 'images/products/week/product-2.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 2, name: 'White chair', price: '$29.00', image: 'images/products/week/product-3.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 3, name: 'Retro table', price: '$29.00', image: 'images/products/week/product-4.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 4, name: 'Wooden radio', price: '$29.00', image: 'images/products/week/product-5.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 5, name: 'Wooden chair', price: '$29.00', image: 'images/products/week/product-6.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 6, name: 'White chair', price: '$29.00', image: 'images/products/week/product-7.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 7, name: 'Retro table', price: '$29.00', image: 'images/products/week/product-8.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
    ],
    [
        { id: 0, name: 'Wooden radio', price: '$29.00', image: 'images/products/week/product-1.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 1, name: 'Wooden chair', price: '$29.00', image: 'images/products/week/product-2.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 2, name: 'White chair', price: '$29.00', image: 'images/products/week/product-3.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 3, name: 'Retro table', price: '$29.00', image: 'images/products/week/product-4.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 4, name: 'Wooden radio', price: '$29.00', image: 'images/products/week/product-5.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 5, name: 'Wooden chair', price: '$29.00', image: 'images/products/week/product-6.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 6, name: 'White chair', price: '$29.00', image: 'images/products/week/product-7.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
    ],
    [
        { id: 0, name: 'Wooden radio', price: '$29.00', image: 'images/products/week/product-1.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 1, name: 'Wooden chair', price: '$29.00', image: 'images/products/week/product-2.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 2, name: 'White chair', price: '$29.00', image: 'images/products/week/product-3.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 3, name: 'Retro table', price: '$29.00', image: 'images/products/week/product-4.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 4, name: 'Wooden radio', price: '$29.00', image: 'images/products/week/product-5.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 5, name: 'Wooden chair', price: '$29.00', image: 'images/products/week/product-6.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
    ],
    [
        { id: 0, name: 'Wooden radio', price: '$29.00', image: 'images/products/week/product-1.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 1, name: 'Wooden chair', price: '$29.00', image: 'images/products/week/product-2.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 2, name: 'White chair', price: '$29.00', image: 'images/products/week/product-3.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 3, name: 'Retro table', price: '$29.00', image: 'images/products/week/product-4.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 4, name: 'Wooden radio', price: '$29.00', image: 'images/products/week/product-5.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
    ],
    [
        { id: 0, name: 'Wooden radio', price: '$29.00', image: 'images/products/week/product-1.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 1, name: 'Wooden chair', price: '$29.00', image: 'images/products/week/product-2.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 2, name: 'White chair', price: '$29.00', image: 'images/products/week/product-3.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
        { id: 3, name: 'Retro table', price: '$29.00', image: 'images/products/week/product-4.png', text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' },
    ]
]