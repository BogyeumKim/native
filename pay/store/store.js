import { configureStore } from "@reduxjs/toolkit";
import expensesSlice from "./slice/expensesSlice";

export const store = configureStore({
  reducer: {
    expensesReducer : expensesSlice
  },
});
