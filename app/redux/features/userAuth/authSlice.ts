import { combineSlices, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getTokenWithOtp,
  getTokenWithUserPass,
} from '../../services/authService';

const initialState = {
  isLoading: false,
  isAuthenticate: false,
  access: '',
  refresh: '',
  error: '',
};
export const getTokenWithUserPassService = createAsyncThunk(
  'getTokenWithUserPassService',
  async (data) => {
    const result = await getTokenWithUserPass(data);
    if (result.ok) {
      return result.json();
    } else {
      const res = await result.json();

      console.log('ress', res.detail);
      throw res.detail;
    }
  }
);
export const getTokenWitOtpService = createAsyncThunk(
  'getTokenWithUserPassService',
  async (data) => {
    const result = await getTokenWithOtp(data);
    return result;
  }
);
export const userPassAuthentication = createSlice({
  name: 'loginToken',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTokenWithUserPassService.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTokenWithUserPassService.fulfilled, (state, action) => {
      state.isLoading = true;
      state.error = '';
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
const authenticateReducer = combineSlices(userPassAuthentication);
export default authenticateReducer;
