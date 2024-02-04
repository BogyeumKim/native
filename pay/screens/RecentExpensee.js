import {Text} from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput';
import { useSelector } from 'react-redux';
import { getDateMinusDay } from '../util/date';

function RecentExpensee() {
    const expenses = useSelector((state) => state.expensesReducer.expenses);

    const recnetRexpenses = expenses.filter((item) => {
        const today = new Date();
        const date7DaysAgo =getDateMinusDay(today, 7)

        return item.date > date7DaysAgo;
    })

    return <ExpensesOutput expensesPeriod="Last 7 Days" expenses={recnetRexpenses}/>
}

export default RecentExpensee;