import axios from "axios";

const BACKEND_URL =
  "https://react-native-course-b79fe-default-rtdb.asia-southeast1.firebasedatabase.app";

export function storeExpense(expenseData) {
  axios.post(BACKEND_URL + "/expenses.json", expenseData);
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
