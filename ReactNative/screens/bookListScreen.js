import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import Card from "../components/card";
const data = [
  { id: Math.random(), title: "like readable English", price: "1500" },
  {
    id: Math.random(),
    title: "has been the industry's standard",
    price: "2600",
  },
  {
    id: Math.random(),
    title: "printer took a galley",
    price: "875",
  },
];
export default function BookListScreen() {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={data}
        renderItem={({ item }) => <Card itemData={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#636363",
    flex: 1,
    paddingHorizontal: 8,
  },
});
