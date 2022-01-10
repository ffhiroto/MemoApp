import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

import AppBar from "../components/AppBar";
import SubmitButton from "../components/SubmitButton";

export default function LogInScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.inner}>
        <Text style={styles.title}>Loi In</Text>
        <TextInput style={styles.input} value="email address" />
        <TextInput style={styles.input} value="xx" />
        <SubmitButton label="Submit" />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registerd?</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Sign up here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    backgroundColor: "#FFFFFF",
    borderColor: "#DDDDDD",
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footer: {
    flexDirection: "row",
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: "#467FD3",
  },
});