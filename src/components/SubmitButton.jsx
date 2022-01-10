import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { string, func } from "prop-types";

export default function SubmitButton(props) {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

SubmitButton.propTypes = {
  label: string.isRequired,
  onPress: func,
};

SubmitButton.defaultProps = {
  onPress: null,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#467FD3",
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingHorizontal: 32,
    paddingVertical: 8,
    color: "#ffffff",
  },
});
