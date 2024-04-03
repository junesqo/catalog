// ProductListPage.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';
import categoryData from '../data/categories.json';

import './ProductList.css';
import '../App.css';

const ProductListPage = () => {
  const { categoryId } = useParams(); // Получаем categoryId из URL
  const filteredProducts = productsData.filter(product => product.categoryId == categoryId);
  const categoryName = categoryData.at(categoryId-1).name

  return (
    <div className='product-list'>
      <h2>{categoryName}</h2>
      <a href="tel:+996703305305">
        <button>Позвонить</button>
      </a>
      <ul>
        {filteredProducts.map(product => (
          <Link to={`/product/${product.id}`}>
            <li key={product.id} className="product-item">
              {/* Отображаем информацию о продукте */}
              <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price} сом</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ProductListPage;