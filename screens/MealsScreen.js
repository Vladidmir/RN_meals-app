import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import MealItem from "../components/MealItem";

import { MEALS, CATEGORIES } from "../data/dummy-data";

const MealsScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  React.useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (item) => item.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  function renderMealItem(itemData) {
    return <MealItem {...itemData.item} />;
  }
  return (
    <View style={s.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
export default MealsScreen;
