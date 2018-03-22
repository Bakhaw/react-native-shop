import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Item extends Component {
  render() {
    return (
      <View>
        <Text>ITEM</Text>
         {this.props.items.map((item, index) => {
           return (
           <View key={index}>
             <Text>{item.name}</Text>
             <Text>{item.price}</Text>              
           </View>
           )
         })}
      </View>
    );
  }
}

export default Item;