import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getStatusResult } from '../../services/statusService';
const initialState = {
  isLoading: true,
  data: [],
  error: false,
};
export const getServiceStatusList = createAsyncThunk(
  'getServiceStatusList',
  async () => {
    const result = await getStatusResult();
    return result;
  }
);
export const serviceSlice = createSlice({
  name: 'statusService',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getServiceStatusList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getServiceStatusList.fulfilled, (state, action) => {
      state.isLoading = false;
      (state.error = false), (state.data = action.payload);
    });
    builder.addCase(getServiceStatusList.rejected, (state) => {
      (state.isLoading = false), (state.error = true);
    });
  },
});
export default serviceSlice.reducer;
