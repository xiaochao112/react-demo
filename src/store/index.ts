import { combineReducers } from 'redux';
import UserReducer from './user/reducer';
import { configureStore } from '@reduxjs/toolkit';
import { userInfo } from '@/store/user/type';

// 定义state
export interface RootState {
  user: userInfo;
}

const reducer = combineReducers({
  user: UserReducer,
});

const store = configureStore({
  reducer,
});

export default store;
