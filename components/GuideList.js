import { Text, View, ScrollView, StyleSheet } from "react-native";
const GuideList = ({ data }) => {
  return data.map((item) => (
    <View key={item} style={s.listContainer}>
      <View style={s.listItem}>
        <Text style={s.itemText}>{item}</Text>
      </View>
    </View>
  ));
};

const s = StyleSheet.create({
  listContainer: {
    width: "80%",
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "left",
  },
});

export default GuideList;
