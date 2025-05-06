import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
// import { useNavigation } from "@react-navigation/native";
import CategoryItem from "../Components/CategoryItem";
import { CATEGORIES } from "../data/data";
const CategoriesScreen = ({ navigation }) => {
  // const navigation = useNavigation();
  const renderCategoryItem = (itemData) => {
    const onPress = () => {
      console.log(itemData.item.id);
      navigation.navigate("Meals", { categoryId: itemData.item.id });
    };
    return (
      <CategoryItem
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPress}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: "white",
    color: "blue",
    marginTop: 10,
    padding: 10,
  },
});
