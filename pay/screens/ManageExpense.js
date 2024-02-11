import { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpense,
  deleteExpense,
  updateExpense,
} from "../store/slice/expensesSlice";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import {
  storeExpense,
  updateExpensesFetch,
  deleteExpenseFetch,
} from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function ManageExpense({ route, navigation }) {
  const [isSubmitting , setIsSubmitting] = useState(false);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const dispatch = useDispatch();

  const selectedExpense = useSelector((state) =>
    state.expensesReducer.expenses.find((item) => item.id === editedExpenseId)
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    setIsSubmitting(true);
    await deleteExpenseFetch(editedExpenseId);
    dispatch(deleteExpense(editedExpenseId));
    navigation.goBack();
  }

  function cancelhandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData) {
    setIsSubmitting(true);
    if (isEditing) {
      dispatch(
        updateExpense({
          id: editedExpenseId,
          data: expenseData,
        })
      );

      updateExpensesFetch(editedExpenseId, expenseData);
    } else {
      const id = await storeExpense(expenseData);
      dispatch(
        addExpense({
          id: id,
          ...expenseData,
        })
      );
    }

    navigation.goBack();
  }

  if(isSubmitting){
    return <LoadingOverlay />
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelhandler}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
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
