import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/data";

const Meals = ({ route }) => {
  const catId = route.params.categoryId;
  console.log(catId);
  const displayMeals = MEALS.filter((mealitem) => {
    return mealitem.categoryIds.indexOf(catId) >= 0;
  });
  return (
    <View>
      <Text style={{ color: "white" }}>
        {displayMeals.map((meals, index) => (
          <View key={index}>
            <Text>{meals.title}</Text>
            <Image style={styles.Image} source={{ uri: meals.imageUrl }} />
          </View>
        ))}
      </Text>
    </View>
  );
};

export default Meals;

const styles = StyleSheet.create({
  Image: {
    width: 300,
    height: 300,
  },
});
