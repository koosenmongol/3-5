import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          width: "100%",
          height: 60,
          backgroundColor: "orange",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="bio"
        options={{
          title: "bio",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="biohazard" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
