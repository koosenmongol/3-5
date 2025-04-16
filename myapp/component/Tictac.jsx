import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const Tictac = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [winPlayer, setWinPlayer] = useState("");
  const [lastclick, setLastclick] = useState("");
  const [wintuluw, setWintuluw] = useState(false);
  const [tie, setTie] = useState(false);
  const wincheck = () => {
    if (boxes[0] === boxes[1] && boxes[1] === boxes[2] && boxes[0] != "") {
      setWintuluw(true);
      setWinPlayer(boxes[0]);
    } else if (
      boxes[3] === boxes[4] &&
      boxes[5] === boxes[4] &&
      boxes[3] != ""
    ) {
      setWintuluw(true);
      setWinPlayer(boxes[3]);
    } else if (
      boxes.length == 9 &&
      boxes[8] != "" &&
      boxes[7] != "" &&
      boxes[6] != "" &&
      boxes[5] != "" &&
      boxes[3] != "" &&
      boxes[2] != "" &&
      boxes[1] != "" &&
      boxes[0] != ""
    ) {
      setTie(true);
      setWintuluw(true);
    }
  };

  const click = (i) => {
    if (boxes[i] === "") {
      const nextValue = lastclick === "X" ? "O" : "X";
      boxes[i] = nextValue;
      setBoxes([...boxes]);
      setLastclick(nextValue);
      console.log(boxes);
      wincheck();
    }
  };
  const gameRestart = () => {
    setBoxes(Array(9).fill(""));
    setWintuluw(false);
    setTie(false);
  };
  return (
    <View style={styles.container}>
      {wintuluw && (
        <View style={styles.winPage}>
          {tie ? (
            <Text style={{ fontSize: 50 }}>TIE</Text>
          ) : (
            <Text style={{ fontSize: 50 }}>Player {winPlayer} win</Text>
          )}

          <TouchableOpacity
            onPress={() => gameRestart()}
            style={styles.newButton}
          >
            <Text style={{ color: "white", fontSize: 30 }}>New game</Text>
          </TouchableOpacity>
        </View>
      )}
      {!wintuluw && (
        <View style={styles.Tictac}>
          {boxes.map((box, i) => (
            <TouchableOpacity onPress={() => click(i)} style={styles.box}>
              <Text style={{ fontSize: 50, color: "white" }}>{box}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Tictac;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "aliceblue",
    flex: 1,
    width: "100%",
  },
  Tictac: {
    width: "100%",
    height: "100%",
    backgroundColor: " white",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  winPage: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
  },
  //   winPage h1 {
  //     color: orange,
  //   }

  newButton: {
    width: "50%",

    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
  },
  box: {
    width: "30%",
    height: "25%",
    backgroundColor: "purple",
    fontSize: 10,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});
