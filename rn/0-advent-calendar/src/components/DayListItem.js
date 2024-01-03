import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DayListItem = ({ item }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );
};

export default DayListItem;

const styles = StyleSheet.create({
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
