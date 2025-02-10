import { configureStore } from '@reduxjs/toolkit';
import { cssColorAPIslice } from './API/APIcsvCSSClr';
import dataReducer from './slice/dataSlice';

export const store = configureStore({
  reducer: {
    [cssColorAPIslice.reducerPath]: cssColorAPIslice.reducer,
    dataSlice: dataReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(cssColorAPIslice.middleware),
})