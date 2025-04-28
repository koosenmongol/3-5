import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen number={userNumber} />;
  }
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.background}>
      <ImageBackground
        resizeMode="cover"
        source={require("./assets/background.png")}
        imageStyle={styles.Imagebackground}
        style={{ flex: 1 }}
      >
        {screen}
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
