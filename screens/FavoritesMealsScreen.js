import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favoritesContext";
import MealsList from "../components/MealsList";

import { MEALS } from "../data/dummy-data";
const FavoritesMealsScreen = () => {
  const { ids } = useContext(FavoritesContext);
  if (!ids.length) {
    return (
      <View style={s.rootContainer}>
        <Text style={s.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));
  return <MealsList isFavorites={true} items={favoriteMeals} />;
};

const s = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default FavoritesMealsScreen;
