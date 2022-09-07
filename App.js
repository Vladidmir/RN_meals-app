import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsScreen from "./screens/MealsScreen";
import MealsDetailScreen from "./screens/MealsDetailScreen";
import FavoritesMealsScreen from "./screens/FavoritesMealsScreen";

import { FavoritesContextProvider } from "./store/context/favoritesContext";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#24120f" },
        drawerContentStyle: { backgroundColor: "#24120f" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#24120f",
        drawerActiveBackgroundColor: "#e2b497",
      }}
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
        name="Categories"
        component={CategoriesScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
        name="Favorites"
        component={FavoritesMealsScreen}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              title: "Meals Categories",
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#24120f" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              options={{
                headerShown: false,
              }}
              component={DrawerNavigator}
            />
            <Stack.Screen name="MealsOverview" component={MealsScreen} />
            <Stack.Screen
              name="MealDetail"
              options={{
                title: "",
              }}
              component={MealsDetailScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="light" />
      </FavoritesContextProvider>
    </>
  );
}
``;
