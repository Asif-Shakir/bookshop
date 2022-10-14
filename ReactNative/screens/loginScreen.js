import { Button, StyleSheet, TextInput, View } from "react-native";

import React from "react";
import axios from "axios";
import { Formik } from "formik";
import apiUrl from "../Shared/apiUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const handleSubmit = async (data) => {
    try {
      const res = await axios.post(apiUrl.Login, JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });
      if (res.data.status === 200) {
        try {
          await AsyncStorage.setItem(
            "token",
            JSON.stringify(res.data.resultData)
          );
          navigation.navigate("Books");
        } catch (e) {
          console.log(e);
        }
      } else if (res.data.status === 401) {
        console.log(res.data);
      }
    } catch (err) {}
  };
  return (
    <View style={styles.mainContainer}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange("email")}
              value={values.title}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange("password")}
              value={values.title}
            />
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View style={{ width: "40%" }}>
                <Button onPress={handleSubmit} title="Login" color={"maroon"} />
              </View>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#eeefcc",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#dadada",
    padding: 10,
    marginBottom: 10,
  },
});
