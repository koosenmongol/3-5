import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../component/PrimaryButton";

const GameScreen = ({ number, gameRestart }) => {
  const [enterNumber, setEnterNumber] = useState(false);
  const [result, setResult] = useState();
  const [winCheck, setWinCheck] = useState(false);
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * number)
  );
  const numberInputHandler = (enteredText) => {
    setEnterNumber(enteredText);
  };
  const handleClick = () => {
    if (enterNumber > randomNumber) setResult(true);
    else if (enterNumber < randomNumber) setResult(false);
    else {
      setWinCheck(true);
      setResult();
    }
  };
  const Restart = () => {
    setWinCheck(false);
    setResult();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>GameScreen</Text>
      <View style={styles.numberContainer}>
        <Text style={styles.hideStyle}>{winCheck ? randomNumber : "?"}</Text>
        <View style={styles.inputStyle}>
          <TextInput
            onChangeText={numberInputHandler}
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            value={enterNumber}
          />
          <PrimaryButton onPress={handleClick}>Таах</PrimaryButton>
        </View>
        <Text style={styles.textStyle}>
          {isNaN(result) ? "" : result ? "Их байна" : "Бага байна"}
        </Text>
        {winCheck && (
          <View>
            <Text style={styles.textStyle}>{"Хожлоо"}</Text>
            <PrimaryButton onPress={gameRestart}>Restart</PrimaryButton>
          </View>
        )}
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  header: {
    color: "white",
    fontSize: 20,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
  },
  hideStyle: {
    color: "white",
    fontSize: 50,
  },
  container: { flex: 1, alignItems: "center", marginTop: 50 },
  numberContainer: {
    flex: 1,
    alignItems: "center",
  },
  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputStyle: {
    // flex: 1,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  textStyle: {
    color: "#ddb52f",
    fontSize: 30,
  },
});
