import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";
import { useDispatch, useSelector } from "react-redux";
import { getDateMinusDay } from "../util/date";
import { useEffect, useState } from "react";
import { fetchExpenses } from "../util/http";
import { setExpenses } from "../store/slice/expensesSlice";

function RecentExpensee() {
  const expenses = useSelector((state) => state.expensesReducer.expenses);
  const dispatch = useDispatch();
  
  useEffect(() => {
    async function getExpenses () {
      const expensesFetch = await fetchExpenses();
      dispatch(setExpenses(expensesFetch));
    }

    getExpenses();
  },[]);

  const recnetRexpenses = expenses.filter((item) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDay(today, 7);
    const itemData = new Date(item.date);

    return itemData > date7DaysAgo && itemData <= today;
  });

  return (
  
    <ExpensesOutput
      expensesPeriod="Last 7 Days"
      expenses={recnetRexpenses}
      fallbackText="No expenses registered for the last 7 days"
    />
  );
}

export default RecentExpensee;
