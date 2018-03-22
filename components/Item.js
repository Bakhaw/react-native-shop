import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements';

class Item extends Component {
  render() {
    return (

      <Card containerStyle={{padding: 0}} >
      {
        this.props.items.map((item, index) => {
          return (
            <View key={index} style={{ width: '100%' }}>
              <ListItem
              roundAvatar
              title={item.name}
              subtitle={item.price}
              avatar={{uri: item.img}}
              rightIcon={{ name: 'add-shopping-cart' }}
              chevronColor={'#555'}
              onPressRightIcon={() => this.props.addToBasket(item, index)}
              />
            </View>
          );
        })
      }
    </Card>
    );
  }
}

export default Item;