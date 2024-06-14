import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import reviewReducer from './reducers/reviewReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    review: reviewReducer,
  },
});

export default store;
