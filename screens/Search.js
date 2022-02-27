import React from "react";
import { View, Text, StatusBar, StyleSheet, Image } from "react-native";
import { FlatGrid } from 'react-native-super-grid';

export default Search = () => {
  const [items, setItems] = React.useState([
    { name: 'White Lorraine Tufted Chair', address: '#1abc9c', distance: '.05 miles away'},
    { name: 'Modern Wooden Desk', address: '#2ecc71', distance: '.05 miles away' },
    { name: 'Adjustable Bronze Desk Lamp', address: '#3498db', distance: '.05 miles away' },
    { name: 'Tan Organic Leather Couch', address: '#9b59b6', distance: '.05 miles away' }
  ]);

  return (
    /* <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.address }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.address}</Text>
        </View>
      )}
    /> */

    <View style={styles.vieww}>
      <Image style={styles.pic} source={require('../assets/img/searchss.png')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff'
  },
  vieww: {
    marginTop: 70,
    backgroundColor: '#fff',
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    borderColor: '#000',
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  pic: {
    height: 690,
    width: 370,
    marginLeft: 10
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});