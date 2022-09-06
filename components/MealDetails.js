import { View, Text, StyleSheet } from "react-native";
const MealDetails = ({
  duration,
  complexity,
  affordability,
  rootStyle,
  textStyle,
}) => {
  return (
    <View style={[s.details, rootStyle]}>
      <Text style={[s.detailItem, textStyle]}>{duration}</Text>
      <Text style={[s.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[s.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

const s = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

export default MealDetails;
