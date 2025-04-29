import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../component/PrimaryButton";

const StartGameScreen = ({ onPickNumber }) => {
  const [enterNumber, setEnterNumber] = useState("");
  const numberInputHandler = (enteredText) => {
    setEnterNumber(enteredText);
  };
  const resetInputhandler = () => {
    setEnterNumber("");
  };
  const confirmInputhandler = () => {
    const choseNumber = parseInt(enterNumber);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99)
      Alert.alert("Үсэг оруулахгүй", "1-99 хооронд тоо оруул", [
        { text: "Okay", style: "destructive", onPress: resetInputhandler },
      ]);
    onPickNumber(choseNumber);
  };
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.header}>Start game</Text>
      <TextInput
        onChangeText={numberInputHandler}
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enterNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputhandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputhandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
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
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  header: {
    color: "white",
    fontSize: 20,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
  },
});
