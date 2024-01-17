'use client';
import { createSlice } from '@reduxjs/toolkit';
const initialState = { link: '/userDefault.png' };
export const userImage = createSlice({
  name: 'userImage',
  initialState,
  reducers: {
    storeUserImage: (state, action) => {
      return { link: action.payload };
    },
  },
});
export const { storeUserImage } = userImage.actions;
export default userImage.reducer;
