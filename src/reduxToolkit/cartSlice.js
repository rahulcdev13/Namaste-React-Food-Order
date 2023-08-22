import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      // mutating the state here | we are directly modifying this state
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.pop(); // remove last inserted item
    },
    clearItems: (state, action) => {
      state.items.length = 0; // []
    },
  },
});

export const { addItems, removeItems, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
