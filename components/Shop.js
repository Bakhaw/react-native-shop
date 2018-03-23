import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

import Items from './Items';
import Basket from './Basket';

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: shopItems,      
      basket: [],
      totalPrice: 0
    };
  }

  addToBasket = (item, index) => { 
    if (this.state.basket.includes(item)) {
      item.count++;      
      this.setState({
        basket: [...this.state.basket],
        totalPrice: this.state.totalPrice + item.price
      })
    } else {
      this.setState({
        basket: [...this.state.basket, item],
        totalPrice: this.state.totalPrice + item.price        
      })
    }
  };

  removeFromBasket = (item, index) => {
    if (item.count > 1) {
      const newBasket = this.state.basket.map(data => {
        if (data.name === item.name) {
          return {
            ...data,
            count: --data.count
          }
        }
        return data;
      })
      
      this.setState({
        basket: newBasket,
        totalPrice: this.state.totalPrice - item.price        
      })
    } else {
      const newBasket = this.state.basket.filter(data => data.name !== item.name)

      this.setState({
        basket: newBasket,
        totalPrice: this.state.totalPrice - item.price        
      })
    }
  };

  render() {
    return (
      <View style={styles.shopContainer}>
        <View style={styles.shopDisplay}>
          <Items items={this.state.items}
                 basket={this.state.basket}
                 addToBasket={this.addToBasket}/>
          <Basket basket={this.state.basket}
                  removeFromBasket={this.removeFromBasket}
                  totalPrice={this.state.totalPrice}/>
        </View>
      
      </View>
    );
  }
}

const shopItems = [
  {
    name: "Veste Biker",
    price: 3590,
    count: 1,
    img: 'https://cdn.yoox.biz/41/41772423uo_11_a_f.jpg'
  },
  {
    name: "Chemise Oklm",
    price: 550,
    count: 1,
    img: 'https://cdn.yoox.biz/38/38668609fq_11_a_f.jpg'    
  },
  {
    name: "Sweat à Capuche",
    price: 595,
    count: 1,
    img: 'https://cdn.yoox.biz/12/12124913jn_11_a_f.jpg'    
  },
  {
    name: 'Sac à dos',
    price: 1490,
    count: 1,
    img: 'https://cdn.yoox.biz/45/45383747jk_11_a_f.jpg'    
  },
  {
    name: "Runners Race",
    price: 495,
    count: 1,
    img: 'https://cdn.yoox.biz/11/11424345un_11_a_f.jpg'    
  },
  {
    name: "Parka Double Hem",
    price: 1395,
    count: 1,
    img: 'https://cdn.yoox.biz/41/41739427oa_11_a_f.jpg'    
  }
];

const styles = StyleSheet.create({
  shopContainer: {
    paddingTop: 30,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff'
  },
  shopDisplay: {
    flex: 1,
    flexDirection: 'column',
  }
});