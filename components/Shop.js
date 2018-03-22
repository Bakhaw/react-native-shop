import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Item from './Item';

export default class Shop extends Component {
  render() {
    return (
      <View style={styles.shopContainer}>
        <Text style={styles.title}>SHOP</Text>

        <View style={styles.shopDisplay}>
          <Items />
          <Basket />
        </View>
      
      </View>
    );
  }
}

class Items extends Component {
  render() {
    return (
      <View style={styles.items}>
        <Text style={styles.title}>ITEMS</Text>
        <Item items={items}/>
      </View>
    );
  }
}

class Basket extends Component {
  render() {
    return (
      <View style={styles.basket}>
        <Text style={styles.title}>BASKET</Text>
      </View>
    );
  }
}

const items = [
  {
    name: "Casquette",
    price: "35€",
  },
  {
    name: "Veste",
    price: "90€",
  },
  {
    name: "Chaussure",
    price: "120€",
  },
  {
    name: "Montre",
    price: "230€",
  },
  {
    name: "Lunettes",
    price: "150€",
  },
  {
    name: "T-Shirt",
    price: "40€",
  }
];

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    textAlign: 'center'
  },
  shopContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#fff'
  },
  shopDisplay: {
    flex: 1,
    flexDirection: 'row',
  },
  items: {
    width: '75%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 20
  },
  basket: {
    width: '25%',    
    borderWidth: 1,
    borderColor: 'black',
    padding: 20
  }
});