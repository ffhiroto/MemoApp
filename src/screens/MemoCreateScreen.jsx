import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, TextInput } from "react-native";

import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";

export default function MemoCreateScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButton name="check" />
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
