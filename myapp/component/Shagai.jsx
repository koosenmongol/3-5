import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
const Shagai = () => {
  const shagaiArray = [
    { img: require("@/assets/shagai/honi.jpg") },
    { img: require("@/assets/shagai/mori.jpg") },
    { img: require("@/assets/shagai/yamaa.jpg") },
    { img: require("@/assets/shagai/temee.jpg") },
  ];
  const testarray = [];
  const getnumber = () => {
    let number = Math.floor(Math.random() * 4);
    return number;
  };
  const [randomArray, setRandomArray] = useState([0, 1, 2, 3]);
  const hayh = () => {
    randomArray.length = 0;
    if (randomArray.length <= 3) {
      for (let i = 0; i < 4; i++) {
        testarray.push(getnumber());
      }
      setRandomArray(testarray);
    }

    console.log(testarray);
    // console.log(shagaiArray);
  };
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.game}>
        {randomArray.map((data1) => (
          <Image source={shagaiArray[data1].img} style={styles.shagaiImg} />
        ))}
      </View>
      <TouchableOpacity
        onPress={hayh}
        style={{
          borderWidth: 1,
          padding: 20,
          borderRadius: 10,
          borderColor: "#DDDDDD",
          backgroundColor: "blue",
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Шагай хаях</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Shagai;

const styles = StyleSheet.create({
  game: {
    height: 300,
    width: 300,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  shagaiImg: {
    width: 140,
    height: 140,
  },
});
