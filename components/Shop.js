import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

import Item from './Item';

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
    console.log(item.price);
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
    if (item.count <= 1) {
      const basket = this.state.basket;
      const newBasket = [...basket.slice(0, index), ...basket.slice(index + 1)];
      
      this.setState({
        basket: newBasket
      })
    }

    this.setState({
      totalPrice: this.state.totalPrice - item.price
    })

    if (item.count > 1) {
      item.count--
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

class Items extends Component {
  render() {
    return (
      <View style={styles.items}>
        <Icon name='shopping-cart' size={40} type='font-awesome'/>
        <Item {...this.props}/>
      </View>
    );
  }
}

class Basket extends Component {
  render() {
    return (
      <View style={styles.basket}>
        <Icon name='shopping-basket' size={40} type='font-awesome'/>

        {this.props.basket.length > 0
          ?
          <View>
            {this.props.basket.map((item, index) => {
              return (
                <View key={index} style={{ width: '100%' }}>
                  <ListItem
                  roundAvatar
                  title={item.name}
                  subtitle={item.price}
                  rightTitle={`${item.count}`}
                  avatar={{uri: item.img}}  
                  rightIcon={{ name: 'remove-shopping-cart' }}
                  chevronColor={'#555'}
                  onPressRightIcon={() => this.props.removeFromBasket(item, index)}
                  />
                </View>
              )
            })
          }
            <Text style={{ textAlign: 'right' }}>Total: {this.props.totalPrice}€</Text>          
          </View>          
          :
          <Text style={{ textAlign: 'center' }}>Le panier est vide :'(</Text>
        }        
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
  },
  items: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 20
  },
  basket: {
    width: '100%',    
    borderWidth: 1,
    borderColor: 'black',
    padding: 20
  }
});