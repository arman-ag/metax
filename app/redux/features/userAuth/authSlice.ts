'use client';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTokenWithUserPass } from '../../services/authService';

const initialState = {
  isLoading: false,
  isAuthenticate: false,
  access: null,
  refresh: null,
  error: null,
};
export const getTokenWithUserPassService = createAsyncThunk(
  'getTokenWithUserPassService',
  async (data) => {
    const result = await getTokenWithUserPass(data);
    if (result.ok) {
      return result.json();
    } else {
      const res = await result.json();

      throw res.detail;
    }
  }
);
// export const getTokenWitOtpService = createAsyncThunk(
//   'getTokenWithUserPassService',
//   async (data) => {
//     const result = await getTokenWithOtp(data);
//     return result;
//   }
// );
export const userPassAuthentication = createSlice({
  name: 'loginToken',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTokenWithUserPassService.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getTokenWithUserPassService.fulfilled, (state, action) => {
      state.isLoading = false;
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
      state.isAuthenticate = true;
    });
    builder.addCase(getTokenWithUserPassService.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
export const otpAuthentication = createSlice({
  name: 'loginToken',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTokenWitOtpService.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTokenWitOtpService.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
      state.isAuthenticate = true;
    });
    builder.addCase(getTokenWitOtpService.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});
export default userPassAuthentication.reducer;
// export default authenticateReducer;
