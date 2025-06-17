import { StyleSheet, Text, View } from 'react-native';
// import { useContext } from 'react';
import MealsList from '../components/MealsList/MealsList';
// import { FavoritesContext } from '../store/context/Favorite-context';
import { MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux';

export default function FavoritesScreen() {
  // const favoritesMealCtx = useContext(FavoritesContext);
  const favoritesMealIds = useSelector(state =>state.favoriteMeals.ids);

  const favoritesmeals = MEALS.filter(meal => favoritesMealIds.includes(meal.id));
  if(favoritesmeals.length === 0){
    return(<View style={styles.rootContainer}>
      <Text style={styles.text}>You have no favorite meals yet🙅🏽‍♂️</Text>
    </View>)
  }
  return (
  <MealsList items={favoritesmeals}  />
  );
}

const styles=StyleSheet.create({
  rootContainer:{
    flex:1,
    alignItems:'center',
    marginTop:50
  },
  text:{
   fontSize:24,
   fontWeight:'bold',
   color:'#F5BCBA',
   backgroundColor:'#8395A7',
   borderRadius:8,
   padding:6

  }
});
