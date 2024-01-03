import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";

const days = [...Array(24)].map((item, index) => index + 1);

const renderItem = ({ item }) => (
  <View style={styles.box}>
    <Text style={styles.text}>{item}</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        renderItem={renderItem}
        contentContainerStyle={styles.row}
        columnWrapperStyle={styles.column}
        numColumns={2}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 10,
  },
  row: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },
  box: {
    flex: 1,
    // if you've width then hight will be calculated to make it a square and vice versa
    aspectRatio: 1,
    backgroundColor: "#f9ede3",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9b4521",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "#9b4521",
    fontSize: 70,
  },
});
