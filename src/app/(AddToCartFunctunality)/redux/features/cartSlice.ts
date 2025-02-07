// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// //interface for cart item

// //interface for cart item
// interface CartItem {
//   _id: string;
//   name: string;
//   title: string;
//   price: number;
//   imageUrl: string;
//   quantity: number;
//   color: string;
//   size: string;
//   discountPercent?: number;
// }

// interface CartState {
//   items: CartItem[];
// }

// const initialState: CartState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<CartItem>) => {
//       const { _id, color, size } = action.payload;
//       const existingItem = state.items.find(
//         (item) => item._id === _id && item.color === color && item.size === size
//       );

//       if (existingItem) {
//         existingItem.quantity += action.payload.quantity;
//       } else {
//         state.items.push(action.payload);
//       }
//     },
//     remove: (state, action: PayloadAction<{ _id: string; color: string; size: string }>) => {
//       state.items = state.items.filter(
//         (item) => !(item._id === action.payload._id && item.color === action.payload.color && item.size === action.payload.size)
//       );
//     },
//     incrementQuantity: (state, action: PayloadAction<{ _id: string; color: string; size: string }>) => {
//       const item = state.items.find(
//         (item) => item._id === action.payload._id && item.color === action.payload.color && item.size === action.payload.size
//       );
//       if (item) {
//         item.quantity += 1;
//       }
//     },
//     decrementQuantity: (state, action: PayloadAction<{ _id: string; color: string; size: string }>) => {
//       const item = state.items.find(
//         (item) => item._id === action.payload._id && item.color === action.payload.color && item.size === action.payload.size
//       );
//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//       }
//     },
//   },
// });

// export const { addToCart, remove, incrementQuantity, decrementQuantity } =
//   cartSlice.actions;

// export default cartSlice.reducer;




import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//interface for cart item
interface CartItem {
  _id: string;
  name: string;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
  color: string;
  size: string;
  discountPercent?: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { _id, color, size } = action.payload;
      const existingItem = state.items.find(
        (item) => item._id === _id && item.color === color && item.size === size
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item._id !== action.payload);
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex(item => item._id === action.payload);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex(item => item._id === action.payload);
      if (itemIndex >= 0 && state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
      }
    },
  },
});

export const { addToCart, remove, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;