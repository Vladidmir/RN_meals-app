import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const IconButton = ({ onPress, iconName, iconColor, iconSize }) => {
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => pressed && s.pressed}
    >
      <Ionicons
        onPress={onPress}
        name={iconName}
        color={iconColor}
        size={iconSize}
      />
    </Pressable>
  );
};

const s = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
export default IconButton;
