// ProductDetailPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';
import './ProductDetailPage.css'; // Импортируем файл стилей
import '../App.css';


const ProductDetailPage = () => {
  const { productId } = useParams(); // Получаем параметр productId из URL
  const product = productsData.find(product => product.id == productId);
  

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>Цена: {product.price} сом</p>
      <div className="image-container">
        <img src={product.image} alt={product.name} className="main-image" />
        <div className="additional-images">
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={product.name} className="additional-image" />
          ))}
        </div>
      </div>
      
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetailPage;
