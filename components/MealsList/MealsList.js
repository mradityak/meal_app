  import { FlatList } from "react-native";
  import MealItem from "./MealItem";


  export default function MealsList({items}){
    const renderMealItem = (itemData) => {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    
    return <MealItem {...mealItemProps} />;
  };

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem}
    />
  );
  }