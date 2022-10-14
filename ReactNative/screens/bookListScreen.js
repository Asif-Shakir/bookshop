import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import Card from "../components/card";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import apiUrl from "../Shared/apiUrl";

export default function BookListScreen() {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    const getBookList = async () => {
      const token = JSON.parse(await AsyncStorage.getItem("token"));
      const res = await axios.get(apiUrl.GetBookList, {
        headers: {
          Authorization: "Bearer " + token["token"],
        },
      });
      setBookList(res.data.resultData);
    };
    getBookList();
  }, []);
  console.log(bookList);
  return (
    <View style={styles.mainContainer}>
      <FlatList
        keyExtractor={(item, index) => item._id}
        data={bookList}
        renderItem={({ item }) => <Card itemData={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#636363",
    flex: 1,
    paddingHorizontal: 40,
  },
});
