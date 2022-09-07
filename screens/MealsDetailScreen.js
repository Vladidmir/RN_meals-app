import React from "react";
import { useContext } from "react";
import { Text, View, Image, ScrollView, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import GuideList from "../components/GuideList";
import IconButton from "../components/IconButton.js";

import { FavoritesContext } from "../store/context/favoritesContext";

const MealsDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const { addFavorite, removeFavorite, ids } = useContext(FavoritesContext);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const {
    imageUrl,
    ingredients,
    title,
    duration,
    complexity,
    affordability,
    steps,
  } = selectedMeal;

  const mealIsFavorite = ids.includes(mealId);

  const changeFavoriteHandler = () => {
    if (mealIsFavorite) {
      removeFavorite(mealId);
    } else {
      addFavorite(mealId);
    }
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteHandler}
            iconSize={22}
            iconName={mealIsFavorite ? "star" : "star-outline"}
            iconColor="white"
          />
        );
      },
    });
  }, [navigation, changeFavoriteHandler]);

  return (
    <ScrollView style={s.rootContainer}>
      <Image
        style={s.image}
        source={{
          uri: imageUrl,
        }}
      />
      <Text style={s.title}>{title}</Text>
      <MealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        textStyle={s.detailText}
      />
      <View style={s.listOutContainer}>
        <Subtitle>ingridients</Subtitle>
        <GuideList data={ingredients} />

        <Subtitle>Steps</Subtitle>
        <GuideList data={steps} />
      </View>
    </ScrollView>
  );
};

const s = StyleSheet.create({
  rootContainer: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 350,
  },
  listOutContainer: {
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
});
export default MealsDetailScreen;
