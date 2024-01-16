'use client';
import { createSlice } from '@reduxjs/toolkit';
const initialState = { id: 0 };
export const userImage = createSlice({
  name: 'userImage',
  initialState,
  reducers: {
    storeUserImage: (state, action) => {
      return action.payload;
    },
  },
});
export const { storeUserImage } = userImage.actions;
export default userImage.reducer;
