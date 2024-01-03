import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import DayListItem from "./src/components/DayListItem";

const days = [...Array(24)].map((item, index) => index + 1);

const renderItem = ({ item }) => <DayListItem item={item} />;

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
});
