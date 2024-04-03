// CategoryList.js

import React from 'react';
import { Link } from 'react-router-dom';
import categoriesData from '../data/categories.json';
import './CategoryList.css';

const CategoryList = () => {
  return (
    <div className="category-list">
      <h2>Каталог</h2>
      <a href="tel:+996703305305">
        <button>Позвонить</button>
      </a>
      <ul className="category-list ul">
        {categoriesData.map(category => (
          <Link to={`/category/${category.id}`}>
            <li key={category.id} className="category-item">
              <img src={require(`../images/${category.image}`)} alt={category.name} />
              <span>{category.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
