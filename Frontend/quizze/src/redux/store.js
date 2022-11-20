import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {combineReducers} from "redux";
import UserReducer from './feature/userSlice';
import thunk from 'redux-thunk'

const reducers = combineReducers({ user: UserReducer });

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export default store;