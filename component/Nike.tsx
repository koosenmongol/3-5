import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { dataNike } from "@/src/dataNike";

const Nike = () => {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <Text style={{ fontSize: 30 }}>Nike</Text>
      <ScrollView horizontal={true}>
        {dataNike.map((kino) => (
          <View style={styles.movieContainer}>
            <Image source={kino.img} style={styles.imageMovie} />
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              {kino.name}
            </Text>
            <Text style={{ fontSize: 18 }}>{kino.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default Nike;
const styles = StyleSheet.create({
  imageMovie: { width: 400, height: 500 },
  movieContainer: { width: 400, marginRight: 20 },
});
