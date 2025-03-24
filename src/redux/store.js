import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import localStorageMiddleware from './middleware/localstorage.js';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
