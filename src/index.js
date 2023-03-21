import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShoppingList from './ShoppingList';

// This is the root component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShoppingList user="Paolo" />
);
