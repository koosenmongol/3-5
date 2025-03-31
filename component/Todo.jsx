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
} from "react-native";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import TaskItem from "./TaskItem";
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
        <Pressable onPress={buttonClick} style={styles.buttonStyle}>
          <Text style={{ color: "white", fontSize: 20 }}>Add</Text>
        </Pressable>
      </View>
      <FlatList
        style={styles.taskList}
        data={taskList}
        renderItem={(itemdata) => {
          return <TaskItem text={itemdata.item} />;
        }}
      />
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
    marginTop: 20,
    flex: 1,
    padding: 5,
    gap: 10,
  },
});
