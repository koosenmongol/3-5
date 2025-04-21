import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
const Test = () => {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.background}>
      <ImageBackground
        resizeMode="cover"
        source={require("../assets/background.png")}
        imageStyle={styles.Imagebackground}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          {" "}
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
      </ImageBackground>
    </LinearGradient>
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
  background: {
    flex: 1,
    marginTop: 20,
  },
  Imagebackground: {
    opacity: 0.15,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
