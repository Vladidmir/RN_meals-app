import { FlatList, View } from "react-native";
import CategoryGridTile from "../components/CategoryGridTIle";
import { CATEGORIES } from "../data/dummy-data";
const CategoriesScreen = ({ navigation }) => {
  function renderCategoryItem(itemData) {
    const { title, color, id } = itemData.item;
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: id,
      });
    };
    return (
      <CategoryGridTile title={title} color={color} onPress={pressHandler} />
    );
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};
export default CategoriesScreen;
