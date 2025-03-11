import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Movie from "@/component/Movie";
import Nike from "@/component/Nike";
import Tictac from "@/component/Tictac";
import Shagai from "@/component/Shagai";
import Todo from "@/component/Todo";
import { Link } from "expo-router";

const index = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link href="/post">Post шилжих</Link>
      <Link href="/profile">Profile шилжих</Link>
      <Link href="/profile/bio">Bio шилжих</Link>
    </View>
  );
};
export default index;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
