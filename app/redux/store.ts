import { configureStore } from '@reduxjs/toolkit';
import selectedItemGallery from './features/selectedGalleryItem/selectedSlice';
import serviceSliceReducer from './features/serviceStatus/statusSlice';
import authenticateReducer from './features/userAuth/authSlice';
import userImage from './features/userImage/imageSlice';
export const store = configureStore({
  reducer: {
    serviceSliceReducer,
    selectedItemGallery,
    userImage,
    authenticateReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
