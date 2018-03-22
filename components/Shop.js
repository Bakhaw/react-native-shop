import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

import Item from './Item';

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: shopItems,      
      basket: []      
    };
  }

  addToBasket = (item) => {
    this.setState({
      basket: [...this.state.basket, item]
    })
  };

  removeFromBasket = (index) => {
    const basket = this.state.basket;
    const newBasket = [...basket.slice(0, index), ...basket.slice(index + 1)];
    this.setState({
      basket: newBasket
    })
    // this.setState(prevState => {
    //   let newBasket = prevState.basket.slice();
    //   newBasket.splice(index, 1);
    //   this.setState({ 
    //     basket: newBasket
    //   });
    // })
  };

  render() {
    return (
      <View style={styles.shopContainer}>
        <View style={styles.shopDisplay}>
          <Items items={this.state.items}
                 basket={this.state.basket}
                 addToBasket={this.addToBasket}/>
          <Basket basket={this.state.basket}
                  removeFromBasket={this.removeFromBasket}/>
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

    let totalPrice = 0;

    return (
      <View style={styles.basket}>
        <Icon name='shopping-basket' size={40} type='font-awesome'/>

        {this.props.basket.length > 0
          ?
          <View>
            {this.props.basket.map((item, index) => {
              totalPrice += item.price;

              return (
                <View key={index} style={{ width: '100%' }}>
                  <ListItem
                  roundAvatar
                  title={item.name}
                  subtitle={item.price}
                  avatar={{uri: item.img}}  
                  rightIcon={{ name: 'remove-shopping-cart' }}
                  chevronColor={'#555'}
                  onPressRightIcon={() => this.props.removeFromBasket(index)}
                  />
                </View>
              )
            })
          }
            <Text style={{ textAlign: 'right' }}>Total: {totalPrice}€</Text>          
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
    img: 'https://cdn.yoox.biz/41/41772423uo_11_a_f.jpg'
  },
  {
    name: "Chemise Oklm",
    price: 550,
    img: 'https://cdn.yoox.biz/38/38668609fq_11_a_f.jpg'    
  },
  {
    name: "Sweat à Capuche",
    price: 595,
    img: 'https://cdn.yoox.biz/12/12124913jn_11_a_f.jpg'    
  },
  {
    name: 'Sac à dos',
    price: 1490,
    img: 'https://cdn.yoox.biz/45/45383747jk_11_a_f.jpg'    
  },
  {
    name: "Runners Race",
    price: 495,
    img: 'https://cdn.yoox.biz/11/11424345un_11_a_f.jpg'    
  },
  {
    name: "Parka Double Hem",
    price: 1395,
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