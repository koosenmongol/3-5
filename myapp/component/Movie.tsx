import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { dataMovie } from "@/src/dataMovie";
const Movie = () => {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <Text style={{ fontSize: 30 }}>Movie</Text>
      <ScrollView>
        {dataMovie.map((kino) => (
          <View style={styles.movieContainer}>
            <Image source={kino.image} style={styles.imageMovie} />
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
export default Movie;
const styles = StyleSheet.create({
  imageMovie: { width: "100%", height: 600 },
  movieContainer: { width: "100%" },
});
