import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DarkModeToggle from './components/DarkModeToggle';
import ProductList from "./components/ProductList";
import Cart from './components/Cart';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  function handleAddToCart(itemName) {
    setCart([...cart, itemName]);
  }

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <label>Filter by Category: </label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Fruits">Fruits</option>
        <option value="bakery">Bakery</option>
      </select>
      <ProductList onAddToCart={handleAddToCart} 
      cart={cart}
      selectedCategory={selectedCategory} />

      <Cart cartItems={cart} />
    </div>
  );
}

export default App
