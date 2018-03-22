import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Item from './Item';

export default class Shop extends Component {
  render() {
    return (
      <View style={styles.shopContainer}>
        <Text>SHOP</Text>

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
        <Text>ITEMS</Text>
        <Item items={items}/>
      </View>
    );
  }
}

class Basket extends Component {
  render() {
    return (
      <View style={styles.basket}>
        <Text>BASKET</Text>
      </View>
    );
  }
}

const items = [
  {
    name: "Casquette",
    price: "35€"
  },
  {
    name: "Veste",
    price: "90€"
  },
  {
    name: "Chaussure",
    price: "120€"
  },
  {
    name: "Montre",
    price: "230€"
  },
  {
    name: "Lunettes",
    price: "150€"
  },
  {
    name: "T-Shirt",
    price: "40€"
  }
];

const styles = StyleSheet.create({
  shopContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '100%',
    backgroundColor: 'red'
  },
  shopDisplay: {
    flex: 1,
    flexDirection: 'row',
  },
  items: {
    borderWidth: 2,
    borderColor: 'black'
  },
  basket: {
    borderWidth: 2,
    borderColor: 'black'
  }
});