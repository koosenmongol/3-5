import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";

import TaskItem from "./TaskItem";
import TaskInput from "./TaskInput";
const Todo = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const CancelAddTask = () => {
    setIsModalVisible(false);
  };
  const AddTask = (enterText) => {
    if (enterText !== "")
      setTaskList((currentTaskList) => [...currentTaskList, enterText]);
    CancelAddTask();
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
      <Pressable
        style={styles.buttonStyle}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Add task</Text>
      </Pressable>
      {isModalVisible && (
        <TaskInput onAddTask={AddTask} onCancel={CancelAddTask} />
      )}
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
  buttonStyle: {
    width: "50%",
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#a373f0",
  },
  taskList: {
    width: "90%",
    marginTop: 20,
    flex: 1,
    padding: 5,
    gap: 10,
  },
});
