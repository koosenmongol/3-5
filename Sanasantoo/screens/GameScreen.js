import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const GameScreen = ({ number }) => {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * number)
  );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>GameScreen</Text>
      <Text style={styles.header}>{number}</Text>
      <Text style={styles.header}>{randomNumber}</Text>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  header: { color: "white", fontSize: 20 },
  container: { flex: 1, alignItems: "center", marginTop: 50 },
});
