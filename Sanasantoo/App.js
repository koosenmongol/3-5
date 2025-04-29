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
  const [screen, setScreen] = useState(true);
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setScreen(false);
  };
  const Refresh = () => {
    setScreen(true);
    console.log("refresh");
  };

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.background}>
      <ImageBackground
        resizeMode="cover"
        source={require("./assets/background.png")}
        imageStyle={styles.Imagebackground}
        style={{ flex: 1 }}
      >
        {screen ? (
          <StartGameScreen onPickNumber={pickedNumberHandler} />
        ) : (
          <GameScreen number={userNumber} gameRestart={Refresh} />
        )}
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
