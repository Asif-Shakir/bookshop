import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.deatilsContainer}>
        <Image style={styles.image} source={require("../assets/icon.png")} />
      </View>
      <View style={{ paddingHorizontal: 5 }}>
        <Text style={{ fontSize: 18, marginTop: 5 }}>My Text</Text>
        <Text style={{ fontSize: 14 }}>
          <Text style={{ fontWeight: "bold", color: "#FD0E9A" }}>Price: </Text>
          PKR 200
        </Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#E9E9E9",
    height: 170,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#111111",
    paddingBottom: 5,
  },
  deatilsContainer: {},
  image: {
    height: 110,
  },
});
