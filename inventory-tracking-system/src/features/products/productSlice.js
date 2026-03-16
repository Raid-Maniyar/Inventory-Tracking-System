import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, push, set, get, remove, update } from "firebase/database";
import { db } from "../../firebase/firebaseConfig";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const snapshot = await get(ref(db, "products"));
    return snapshot.val() || {};
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product, { dispatch }) => {
    const newRef = push(ref(db, "products"));
    await set(newRef, product);
    dispatch(fetchProducts());
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { dispatch }) => {
    await remove(ref(db, `products/${id}`));
    dispatch(fetchProducts());
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, product }, { dispatch }) => {
    await update(ref(db, `products/${id}`), product);
    dispatch(fetchProducts());
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload || {};
    });
  },
});

export default productSlice.reducer;