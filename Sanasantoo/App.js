import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.background}>
      <ImageBackground
        resizeMode="cover"
        source={require("./assets/background.png")}
        imageStyle={styles.Imagebackground}
        style={{ flex: 1 }}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    marginTop: 20,
  },
  Imagebackground: {
    opacity: 0.15,
  },
});
