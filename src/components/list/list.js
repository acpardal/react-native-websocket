import React from 'react'
import { StyleSheet, FlatList, Text, View } from 'react-native';

const _keyExtractor = item => item.name;
const _renderItem = 
  ({item}) => 
    <View style={styles.list}>
      <Text>{item.name}</Text>
      <Text>{item.age}</Text>
    </View>;

const List = ({ feed }) => (
  <View>
    <FlatList
      data={feed}
      keyExtractor={_keyExtractor}
      renderItem={_renderItem}
    />
  </View>
);

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default List;