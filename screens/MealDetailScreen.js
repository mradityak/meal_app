import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
// import { FavoritesContext } from '../store/context/Favorite-context';
import { addFavorite, removeFavorite } from "../store/redux/favorites";
import Toast from 'react-native-toast-message';


export default function MealDetailScreen({ route, navigation }) {
  // const favoriteMealCtx = useContext(FavoritesContext);

  const favoriteMealids = useSelector((state) => state.favoriteMeals.ids);
  // const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealids.includes(mealId);

  function ChangeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      // favoriteMealCtx.removeFavorite(mealId);
      dispatch(removeFavorite(mealId));
      Toast.show({
        type:'success',
        text1:'Removed from favotites'
      });

    } else {
      // favoriteMealCtx.addFavorite(mealId);
      dispatch(addFavorite(mealId));
      Toast.show({
        type:'success',
        text1:"Added to favorites"
      });
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "cart" : "cart-outline"}
            color="white"
            onPress={ChangeFavoriteStatusHandler}
            style={{ marginRight: 15 }}
          />
        );
      },
    });
  }, [navigation, ChangeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailsText}
      />
      <View style={styles.mainlistContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
  },
  detailsText: {
    color: "#01CBC6",
    fontWeight: "bold",
  },
  mainlistContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
  icon1: {
    marginRight: 10,
  },
});
