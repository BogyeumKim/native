import { FlatList, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesOutput/ExpensesSummary";
import ExpensesList from "./ExpensesOutput/ExpensesList";

function ExpensesOutput({expenses}) {
    return (  
        <View>
            <ExpensesSummary />
            <ExpensesList />
        </View>
    );
}

export default ExpensesOutput;