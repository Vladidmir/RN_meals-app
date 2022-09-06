import {
  View,
  Text,
  Pressable,
  Image,
  Platform,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import MealDetails from "./MealDetails";

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();

  const selectMealItemHandler = () => {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  };
  return (
    <View style={s.MealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && s.mealPressed}
        onPress={() => selectMealItemHandler()}
      >
        <View style={s.innerCintainer}>
          <Image
            style={s.image}
            source={{
              uri: imageUrl,
            }}
          />
          <Text style={s.title}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
};

const s = StyleSheet.create({
  MealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerCintainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  mealPressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});

export default MealItem;
