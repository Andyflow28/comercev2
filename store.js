import { configureStore } from '@reduxjs/toolkit';
// reducer
import users from './slice/users';
import products from './slice/products';
import product_buy from './slice/product_buy';

export default configureStore({
  reducer: {
    users,
    products,
    product_buy
  }
});