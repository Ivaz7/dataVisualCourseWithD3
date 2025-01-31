import { configureStore } from '@reduxjs/toolkit';
import { cssColorAPIslice } from './API/APIcsvCSSClr';

export const store = configureStore({
  reducer: {
    [cssColorAPIslice.reducerPath]: cssColorAPIslice.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(cssColorAPIslice.middleware),
})