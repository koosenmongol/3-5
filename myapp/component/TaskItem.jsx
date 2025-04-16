import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
const TaskItem = ({ text }) => {
  return (
    <View style={styles.onelistStyle}>
      <BouncyCheckbox />
      <Text style={styles.task}>{text}</Text>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  task: {
    fontSize: 20,
    color: "white",
    borderWidth: 1,
    backgroundColor: "#a373f0",
    borderRadius: 5,
    padding: 5,
  },
  onelistStyle: {
    flexDirection: "row",
    marginTop: 5,
  },
});
