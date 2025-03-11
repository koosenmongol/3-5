import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  CheckBox,
} from "react-native";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
const Todo = () => {
  const [enterText, setenterText] = useState("");
  const [taskList, setTaskList] = useState([]);
  const handleInput = (text) => {
    setenterText(text);
  };
  const buttonClick = () => {
    setTaskList((currentTaskList) => [...taskList, enterText]);
    // console.log(taskList);
  };
  const clear = (isChecked, index) => {
    console.log(isChecked, index);
    setTaskList((currentTaskList) => {
      return currentTaskList.filter((task, i) => task[i] !== task[index]);
    });
  };
  const [isChecked, setIsChecked] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <TextInput
          onChangeText={(text) => handleInput(text)}
          style={styles.inputStyle}
          placeholder="Add a task"
        />
        <TouchableOpacity onPress={buttonClick} style={styles.buttonStyle}>
          <Text style={{ color: "white", fontSize: 20 }}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.taskList}>
        {taskList.map((task, index) => (
          <View style={styles.onelistStyle}>
            <BouncyCheckbox onPress={(isChecked) => clear(isChecked, index)} />
            <Text style={styles.task} key={index}>
              {task}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  inputStyle: {
    width: "70%",
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonStyle: {
    width: "20%",
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#a373f0",
  },
  heading: {
    flexDirection: "row",
  },
  taskList: {
    width: "90%",
    borderWidth: 1,
    bordercolor: "gray",
    marginTop: 20,
    flex: 1,
    borderRadius: 5,
    padding: 5,
    gap: 10,
  },
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
  },
});
