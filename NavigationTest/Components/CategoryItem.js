import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryItem = ({ title, color, onPress }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Pressable style={styles.container} onPress={onPress}>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    height: 150,
    margin: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
