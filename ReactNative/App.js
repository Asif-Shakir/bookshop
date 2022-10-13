import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import BookListScreen from "./screens/bookListScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BookListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
