import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import counterReducer from './counterReducer';

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
