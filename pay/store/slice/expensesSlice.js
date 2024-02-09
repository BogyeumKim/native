import { createSlice } from "@reduxjs/toolkit";


const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [],
  },
  reducers: {
    setExpenses : (state, action) => {
        state.expenses = action.payload;
    },
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    deleteExpense: (state, action) => {
        state.expenses = state.expenses.filter( (item) => item.id !== action.payload)
    },
    updateExpense: (state, action) => {
        const updateIndex = state.expenses.findIndex( (item) => item.id === action.payload.id);
        const updateItem = {...state.expenses[updateIndex], ...action.payload.data};
        state.expenses[updateIndex] = updateItem;
    },
  },
});

export const { addExpense, deleteExpense, updateExpense,setExpenses} = expenseSlice.actions;
export default expenseSlice.reducer;
