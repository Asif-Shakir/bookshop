import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Card = ({ itemData }) => {
  console.log(itemData);
  const imagePath = "http://172.16.1.125:8080/" + itemData.imagePath;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.deatilsContainer}>
        {itemData.imagePath ? (
          <Image style={styles.image} source={{ uri: imagePath }} />
        ) : (
          <Image style={styles.image} source={require("../assets/icon.png")} />
        )}
      </View>
      <View style={{ paddingHorizontal: 5 }}>
        <Text style={{ fontSize: 18, marginTop: 5 }}>{itemData.title}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 14 }}>
            <Text style={{ fontWeight: "bold", color: "#FD0E9A" }}>Price:</Text>
            PKR {itemData.price}
          </Text>
          <Text style={{ fontSize: 14 }}>
            <Text style={{ fontWeight: "bold", color: "#FD0E9A" }}>Pages:</Text>
            {itemData.pages}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#E9E9E9",
    height: 250,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#111111",
    paddingBottom: 5,
    marginBottom: 10,
  },
  deatilsContainer: {},
  image: {
    height: 150,
    resizeMode: "cover",
  },
});
