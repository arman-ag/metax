'use client';
import { createSlice } from '@reduxjs/toolkit';
const initialState = { id: 0 };
export const selectedItemGallery = createSlice({
  name: 'selectedItemGallery',
  initialState,
  reducers: {
    selectedItem: (state, action) => {
      return action.payload;
    },
  },
});
export const { selectedItem } = selectedItemGallery.actions;
export default selectedItemGallery.reducer;
