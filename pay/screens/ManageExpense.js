import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { useDispatch } from "react-redux";
import {
  addExpense,
  deleteExpense,
  updateExpense,
} from "../store/slice/expensesSlice";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    dispatch(deleteExpense(editedExpenseId));
    navigation.goBack();
  }

  function cancelhandler() {
    navigation.goBack();
  }

  function confirmHandler(expenseData) {
    console.log(expenseData);
    if (isEditing) {
      dispatch(
        updateExpense({
          id: editedExpenseId,
          data: expenseData,
        })
      );
    } else {
      dispatch(
        addExpense({
          id: Math.random().toString(),
          ...expenseData
          // description: "ADD!!",
          // amount: 19.99,
          // date: new Date("2024-02-04").toISOString(),
        })
      );
    }

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelhandler}
        onSubmit={confirmHandler}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
