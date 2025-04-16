import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Test = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Test</Text>
        <TextInput
          maxLength={2}
          keyboardAppearance="light"
          keyboardType="number-pad"
          placeholder="enter text"
          placeholderTextColor={"red"}
          style={styles.numberInput}
        />
      </View>
    </SafeAreaView>
  );
};

export default Test;

const styles = StyleSheet.create({
  numberInput: {
    textAlign: "center",
    width: 100,
    height: 60,

    elevation: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
  },
});
