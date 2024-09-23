import React, {useState, useMemo} from 'react';
import './App.css';
import ProductList from './components/ProductList';
import FilterButtons from './components/FilterButtons';

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

// Debounce function to delay the execution of filtering
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function App() {
    const [filter, setFilter] = useState('All');

    const filterProducts = debounce((category) => {
        setFilter(category);
    }, 300);

    // Use memoization to avoid unnecessary recalculations
    const filteredProducts = useMemo(() => {
        return filter === 'All'
            ? products
            : products.filter((product) => product.category === filter);
    }, [filter]);

    const categories = useMemo(() => {
        return ['All', ...new Set(products.map((product) => product.category))];
    }, []);

    return (
        <div className="App">
            <h1>Product List</h1>
            <FilterButtons categories={categories} onFilter={filterProducts} />
            <ProductList products={filteredProducts} />
        </div>
    );
}

export default App;
