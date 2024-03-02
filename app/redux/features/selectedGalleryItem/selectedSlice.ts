'use client';
import { createSlice } from '@reduxjs/toolkit';
const initialState = {};
export const selectedItemGallery = createSlice({
  name: 'selectedItemGallery',
  initialState,
  reducers: {
    selectedItem: (state, action) => {
      return {
        ...state,
        [action.payload.service]: action.payload.chooseItem,
      };
    },
  },
});
export const { selectedItem } = selectedItemGallery.actions;
export default selectedItemGallery.reducer;
