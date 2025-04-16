import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  CheckBox,
  ScrollView,
  Pressable,
  FlatList,
  Modal,
} from "react-native";
import React, { useState } from "react";

const TaskInput = (props) => {
  const [enterText, setenterText] = useState("");

  const handleInput = (text) => {
    setenterText(text);
  };
  const buttonClick = () => {
    props.onAddTask(enterText);
    setenterText("");
  };
  return (
    <Modal animationType="slide">
      <View style={styles.heading}>
        <TextInput
          onChangeText={(text) => handleInput(text)}
          style={styles.inputStyle}
          placeholder="Add a task"
          value={enterText}
        />
        <View style={styles.buttonsContainer}>
          <Pressable onPress={buttonClick} style={styles.buttonStyle}>
            <Text style={{ color: "white", fontSize: 20 }}>Add</Text>
          </Pressable>
          <Pressable onPress={props.onCancel} style={styles.buttonStyle}>
            <Text style={{ color: "white", fontSize: 20 }}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  heading: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    padding: 50,
  },
  inputStyle: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonStyle: {
    width: "45%",
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#a373f0",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
