import { View, Text, StyleSheet } from 'react-native';
export default function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.title, textStyle]}>{duration}m</Text>
      <Text style={[styles.title, textStyle]}>{complexity} </Text>
      <Text style={[styles.title, textStyle]}>{affordability} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'space-around',
  },
  title: {
    margin: 5,
  },
});
