import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';

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
        <Text style={styles.title}>SHOP</Text>

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
        <Text style={styles.title}>ITEMS</Text>
        <Item {...this.props}/>
      </View>
    );
  }
}

class Basket extends Component {
  render() {
    return (
      <View style={styles.basket}>
        <Text style={styles.title}>BASKET</Text>

        {this.props.basket.length > 0
          ?
          this.props.basket.map((item, index) => {
            return (
              <View key={index} style={{ width: '100%' }}>
                <ListItem
                roundAvatar
                title={item.name}
                subtitle={item.price}
                avatar={{uri: item.img}}  
                rightIcon={{ name: 'delete' }}
                chevronColor={'#555'}
                onPressRightIcon={() => this.props.removeFromBasket(index)}
                />
              </View>
            )
          })
          :
          <Text>Basket empty...</Text>
        }        
      </View>
    );
  }
}

const shopItems = [
  {
    name: "Veste Biker",
    price: "3590€",
    img: 'https://cdn.yoox.biz/41/41772423uo_11_a_f.jpg'
  },
  {
    name: "Chemise Oklm",
    price: "550€",
    img: 'https://cdn.yoox.biz/38/38668609fq_11_a_f.jpg'    
  },
  {
    name: "Sweat à Capuche",
    price: "595€",
    img: 'https://cdn.yoox.biz/12/12124913jn_11_a_f.jpg'    
  },
  {
    name: 'Sac à dos',
    price: "1490€",
    img: 'https://cdn.yoox.biz/45/45383747jk_11_a_f.jpg'    
  },
  {
    name: "Runners Race",
    price: "495€",
    img: 'https://cdn.yoox.biz/11/11424345un_11_a_f.jpg'    
  },
  {
    name: "Parka Double Hem",
    price: "1395€",
    img: 'https://cdn.yoox.biz/41/41739427oa_11_a_f.jpg'    
  }
];

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    textAlign: 'center'
  },
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