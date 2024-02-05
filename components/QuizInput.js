import { StyleSheet, Text, TextInput, View } from "react-native";

export default function QuizInput({
  labelName,
  inputValue,
  inputHandler,
  placeholder,
}) {
  return (
    <>
      <Text style={styles.label}>{labelName}</Text>
      <View style={styles.input}>
        <TextInput
          value={inputValue}
          onChange={inputHandler}
          placeholder={placeholder}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "#004346",
    paddingVertical: 5,
  },
  input: {
    borderColor: "#172A3A",
    borderWidth: 1,
    borderRadius: 2,
    paddingLeft: 10,
    paddingVertical: 5,
  },
});
