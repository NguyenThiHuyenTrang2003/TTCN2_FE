import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [], 
    loading: false, 
    error: null, 
  },
  reducers: {
    fetchOrders: (state) => {
      state.loading = true;
    },
    fetchOrdersSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    fetchOrdersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createOrder: (state) => {
      state.loading = true;
    },
    createOrderSuccess: (state, action) => {
      state.loading = false;
      state.orders.push(action.payload);
    },
    createOrderFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchOrders,
  fetchOrdersSuccess,
  fetchOrdersFail,
  createOrder,
  createOrderSuccess,
  createOrderFail,
} = orderSlice.actions;

export default orderSlice.reducer;
