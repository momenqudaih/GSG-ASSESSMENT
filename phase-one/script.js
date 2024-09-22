const products = [
    {name: 'Smartphone', category: 'Electronics', price: 299},
    {name: 'Laptop', category: 'Electronics', price: 799},
    {name: 'T-shirt', category: 'Clothing', price: 25},
    {name: 'Jeans', category: 'Clothing', price: 50},
    {name: 'Couch', category: 'Furniture', price: 799},
    {name: 'Dining Table', category: 'Furniture', price: 999},
    {name: 'Toaster', category: 'Appliances', price: 49},
    {name: 'Refrigerator', category: 'Appliances', price: 899},
    {name: 'Tennis Racket', category: 'Sports', price: 150},
    {name: 'Basketball', category: 'Sports', price: 45},
];

// Get the categories from the products array
const getCategories = (products) => {
    const categories = new Set(products.map((product) => product.category));
    return ['All', ...categories];
};

// Dynamically create filter buttons
const createCategoryButtons = (categories) => {
    const filterSection = document.querySelector('.filter-section');
    categories.forEach((category) => {
        const button = document.createElement('button');
        button.textContent = category;
        button.addEventListener('click', () => filterProducts(category));
        filterSection.appendChild(button);
    });
};

const debounce = (func, delay) => {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
};

const displayProducts = (productsToDisplay) => {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear existing products

    productsToDisplay.forEach((product) => {
        // Create the product element
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        // Create and append product name
        const productName = document.createElement('h3');
        productName.textContent = product.name;

        // Create and append product category
        const productCategory = document.createElement('p');
        productCategory.textContent = `Category: ${product.category}`;

        // Create and append product price
        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price}`;

        // Append all to the product element
        productElement.appendChild(productName);
        productElement.appendChild(productCategory);
        productElement.appendChild(productPrice);

        // Append the product element to the product list
        productList.appendChild(productElement);
    });
};

const filterProducts = debounce((category) => {
    const filteredProducts =
        category === 'All'
            ? products
            : products.filter((product) => product.category === category);

    displayProducts(filteredProducts);
}, 300);

// Display all categories & products initially
document.addEventListener('DOMContentLoaded', () => {
    const categories = getCategories(products);
    createCategoryButtons(categories);
    displayProducts(products);
});
