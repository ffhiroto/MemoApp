import React from "react";
import { View, TextInput, StyleSheet, KeyboardAvoidingView } from "react-native";

import CircleButton from "../components/CircleButton";

export default function MemoEditScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput value="Purchase list" multiline style={styles.input} />
      </View>
      <CircleButton
        name="check"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 37,
    flex: 1,
  },
  input: {
    textAlignVertical: "top",
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
});
