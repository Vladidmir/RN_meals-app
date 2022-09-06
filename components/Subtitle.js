import { View, Text, StyleSheet } from "react-native";
const Subtitle = ({ children }) => {
  return (
    <View style={s.subtitleContainer}>
      <Text style={s.subtitle}>{children}</Text>
    </View>
  );
};
const s = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    padding: 6,
    margin: 4,
    marginHorizontal: 24,
    width: "50%",
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default Subtitle;
