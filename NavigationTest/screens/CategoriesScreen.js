import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoriesScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <Text>CategoriesScreen</Text>
      <Pressable
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Meals")}
      >
        <Text>Go Meals</Text>
      </Pressable>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: "white",
    color: "blue",
    marginTop: 10,
    padding: 10,
  },
});
