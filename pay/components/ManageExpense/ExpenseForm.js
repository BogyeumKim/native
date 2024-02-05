import { TextInput, View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  function amountChangeHandler() {}

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHandler,
        }}
      />
      <Input label="Date" textInputConfig={{
        placeholder: 'YYYY-MM-DD',
        maxLength:10,
        onChangeText : () => {}
      }} />
      <Input label="Description" textInputConfig={{
        multiline : true,
        autoCapitalize : 'none' // 대소문자 방지
        // autoCorrect : false, // default
      }} />
    </View>
  );
}

export default ExpenseForm;
