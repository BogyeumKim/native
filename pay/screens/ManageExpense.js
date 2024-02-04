import { useLayoutEffect } from 'react';
import {Text} from 'react-native'

function ManageExpense({route,navigation}) {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        console.log(route);
        navigation.setOptions({
            title : isEditing ? 'Edit Expense' : 'Add Expense'
        });
    },[navigation,isEditing]);
    

    return <Text>ManageExpense</Text>
}

export default ManageExpense;