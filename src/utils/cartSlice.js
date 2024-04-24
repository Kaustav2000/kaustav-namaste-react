import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // Redux Toolkit uses immerjs behind the scenes
    addItem: (state, action) => {
      // mutating the state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      console.log(state); // gives a proxy object
      console.log(current(state));
      // state.items=[] will not work

      //   state.items.length = 0; //[]   this will work
      return { items: [] }; /// this will work // this object will replace the original state
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
