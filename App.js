import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Profil from "./components/containers/Profil/Profil";
import Auth from "./components/containers/Auth/Auth";

export default function App() {
  // let user = null;
  return (
    <View style={styles.container}>
      <Text>
        <Auth />
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
