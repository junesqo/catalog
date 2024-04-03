// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import ProductListPage from './components/ProductListPage';
import ProductDetailPage from './components/ProductDetailPage'; // Импорт страницы с деталями продукта
import './App.css'; 

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<CategoryList />} />
          <Route path="/category/:categoryId" element={<ProductListPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} /> // Добавляем маршрут для страницы с деталями продукта

        </Routes>
      </div>
  );
}

export default App;
