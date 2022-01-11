import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, TextInput } from "react-native";

import CircleButton from "../components/CircleButton";

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButton
        name="check"
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "MemoList" }],
          });
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
