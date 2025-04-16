import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const Flatlistexample = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={(itemData) => {
          return (
            <View>
              <Text> {itemData.item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Flatlistexample;

const styles = StyleSheet.create({});
