import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";
import { useSelector } from "react-redux";
function AllExpenses() {
  const expenses = useSelector((state) => state.expensesReducer.expenses);
  
  return <ExpensesOutput expensesPeriod="Total" expenses={expenses} />;
}

export default AllExpenses;
