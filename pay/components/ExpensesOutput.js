import { FlatList, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesOutput/ExpensesSummary";
import ExpensesList from "./ExpensesOutput/ExpensesList";

function ExpensesOutput({expenses , expensesPeriod}) {
    return (  
        <View>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
            <ExpensesList />
        </View>
    );
}

export default ExpensesOutput;