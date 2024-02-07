import { createSlice } from "@reduxjs/toolkit";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description : '신발',
        amount : 59.99,
        date : new Date('2024-02-01').toISOString().split('T')[0],
    },
    {
        id: 'e2',
        description : '티셔츠',
        amount : 109.99,
        date : new Date('2024-01-05').toISOString().split('T')[0],
    },
    {
        id: 'e3',
        description : '청바지',
        amount : 89.99,
        date : new Date('2024-01-20').toISOString().split('T')[0],
    },
    {
        id: 'e4',
        description : '자켓',
        amount : 209.99,
        date : new Date('2024-02-09').toISOString().split('T')[0],
    },
    {
        id: 'e5',
        description : '반지',
        amount : 29.99,
        date : new Date('2024-01-11').toISOString().split('T')[0],
    }, {
        id: 'e6',
        description : '신발',
        amount : 59.99,
        date : new Date('2024-02-01').toISOString().split('T')[0],
    },
    {
        id: 'e7',
        description : '티셔츠',
        amount : 109.99,
        date : new Date('2024-01-05').toISOString().split('T')[0],
    },
    {
        id: 'e8',
        description : '청바지',
        amount : 89.99,
        date : new Date('2024-01-20').toISOString().split('T')[0],
    },
    {
        id: 'e9',
        description : '자켓',
        amount : 209.99,
        date : new Date('2024-02-09').toISOString().split('T')[0],
    },
    {
        id: 'e10',
        description : '반지',
        amount : 29.99,
        date : new Date('2024-01-11').toISOString().split('T')[0],
    },
];

const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: DUMMY_EXPENSES,
  },
  reducers: {
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

export const { addExpense, deleteExpense, updateExpense} = expenseSlice.actions;
export default expenseSlice.reducer;
