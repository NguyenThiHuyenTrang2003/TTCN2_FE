import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
  name: "table",
  initialState: {
    tables: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchTables: (state) => {
      state.loading = true;
    },
    fetchTablesSuccess: (state, action) => {
      state.loading = false;
      state.tables = action.payload;
    },
    fetchTablesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchTables,
  fetchTablesSuccess,
  fetchTablesFail,
} = tableSlice.actions;

export default tableSlice.reducer;
