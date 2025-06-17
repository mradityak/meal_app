import { View, StyleSheet, Text } from 'react-native';
export default function Subtitle({children}) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  subTitle:{
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center'
  },
  subTitleContainer:{
    marginHorizontal:12,
    padding:6,
    borderBottomWidth:4,
    borderBottomColor:'#8B78E6'
  },

});
