import { FlatList, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesOutput/ExpensesSummary";
import ExpensesList from "./ExpensesOutput/ExpensesList";


const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description : '신발',
        amount : 59.99,
        date : new Date('2024-02-01')
    },
    {
        id: 'e2',
        description : '티셔츠',
        amount : 109.99,
        date : new Date('2024-01-05')
    },
    {
        id: 'e3',
        description : '청바지',
        amount : 89.99,
        date : new Date('2024-01-20')
    },
    {
        id: 'e4',
        description : '자켓',
        amount : 209.99,
        date : new Date('2024-02-09')
    },
    {
        id: 'e5',
        description : '반지',
        amount : 29.99,
        date : new Date('2024-01-11')
    },
];

function ExpensesOutput({expenses , expensesPeriod}) {
    return (  
        <View>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
            <ExpensesList />
        </View>
    );
}

export default ExpensesOutput;