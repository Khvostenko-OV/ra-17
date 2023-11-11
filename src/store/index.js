//import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import serviceAddReducer from '../reducers/serviceAdd';
import serviceListReducer from '../reducers/serviceList';

const reducer = {
  serviceAdd: serviceAddReducer,
  serviceList: serviceListReducer,
};

const store = configureStore({reducer});
export default store;
