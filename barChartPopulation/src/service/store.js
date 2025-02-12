import { configureStore } from '@reduxjs/toolkit';
import { worldPopulation } from './API/APIworldPopulation';
import dataReducer from './Slice/data';

export const store = configureStore({
  reducer: {
    [worldPopulation.reducerPath]: worldPopulation.reducer,
    dataSlice: dataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(worldPopulation.middleware),
})