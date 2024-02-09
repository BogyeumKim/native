import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-course-b79fe-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json",
    expenseData
  );
}
