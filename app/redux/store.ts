import { configureStore } from '@reduxjs/toolkit';
import selectedItemGallery from './features/selectedGalleryItem/selectedSlice';
import serviceSliceReducer from './features/serviceStatus/statusSlice';
export const store = configureStore({
  reducer: {
    serviceSliceReducer,
    selectedItemGallery,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
