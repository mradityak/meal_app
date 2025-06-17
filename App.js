import { StyleSheet, StatusBar } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealOverview from "./screens/MealsOverview";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
// import FavoritesContextProvider from "./store/context/Favorite-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigationHandler() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#DFAF2B" },
        headerTintColor: "black",
        drawerContentStyle: { backgroundColor: "#F9DDA4" },
        drawerInactiveTintColor: "#26ae60",
        drawerActiveTintColor: "#EA7773",
        drawerActiveBackgroundColor: "#A4B0BD",
      }}
    >
      <Drawer.Screen
        // name="Drawer"
        name="Home"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider>  */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#DFAF2B" },
              headerTintColor: "black",
            }}
          >
            <Stack.Screen
              name="MealsScreen"
              component={DrawerNavigationHandler}
              options={{
                headerShown: false,
                backgroundColor: "rgb(90, 134, 36)",
              }}
            />
            <Stack.Screen name="MealOverview" component={MealOverview} />
            <Stack.Screen
              name="MealDetailScreen"
              component={MealDetailScreen}
              options={{ title: "About the meal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({});
