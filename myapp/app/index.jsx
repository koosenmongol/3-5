import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Movie from "@/component/Movie";
// 123
import Nike from "@/component/Nike";
import Tictac from "@/component/Tictac";
import Shagai from "@/component/Shagai";
import Todo from "@/component/Todo";
import Flatlistexample from "@/component/Flatlistexample";
import { Link } from "expo-router";

const index = () => {
  return (
    // <Flatlistexample />
    <Todo />
    // <Shagai />
    // <Nike />

    // <View style={styles.container}>
    //   <Text style={{ fontWeight: "bold" }}>Home</Text>
    //   <Link href="/post">
    //     <View style={styles.linkStyle}>
    //       <Text>Post шилжих</Text>
    //     </View>
    //   </Link>
    //   <Link href="/profile">
    //     <View style={styles.linkStyle}>
    //       <Text>Profile шилжих</Text>
    //     </View>
    //   </Link>
    //   <Link href="/profile/bio">
    //     <View style={styles.linkStyle}>
    //       <Text>Bio шилжих</Text>
    //     </View>{" "}
    //   </Link>
    // </View>
  );
};
export default index;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  linkStyle: {
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});
