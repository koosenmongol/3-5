import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const post = () => {
  return (
    <View>
      <Text>post</Text>
      <Link href="/index">Home шилжих</Link>
    </View>
  );
};

export default post;

const styles = StyleSheet.create({});
