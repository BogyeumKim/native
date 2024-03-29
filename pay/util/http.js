import axios from "axios";

const BACKEND_URL =
  "https://react-native-course-b79fe-default-rtdb.asia-southeast1.firebasedatabase.app";

export async function storeExpense(expenseData) {
  const response = await axios.post(BACKEND_URL + "/expenses.json", expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");

  const expenses = [];

  // console.log('GET FETCH DATA :: ' ,response.data);
  for (const key in response.data) {
    const expenseObj = {
        id : key,
        amount : response.data[key].amount,
        date : response.data[key].date,
        description : response.data[key].description
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateExpensesFetch(id, expenseData) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`,expenseData);
}

export function deleteExpenseFetch(id) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`)
}