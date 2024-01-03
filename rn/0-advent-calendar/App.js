import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>2</Text>
      </View>
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
    gap: 10,
  },
  box: {
    width: 300,
    height: 300,
    backgroundColor: "#f9ede3",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9b4521",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#9b4521",
    fontSize: 70,
  },
});
