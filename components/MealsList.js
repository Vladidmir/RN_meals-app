import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

const MealsList = ({ items, isFavorites = false }) => {
  function renderMealItem(itemData) {
    return <MealItem {...itemData.item} />;
  }
  return (
    <View style={s.container}>
      <FlatList
        data={items}
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

export default MealsList;
