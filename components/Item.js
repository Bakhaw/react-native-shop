import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Item extends Component {
  render() {
    return (
      <View style={styles.items}>
         {this.props.items.map((item, index) => {
           return (
           <View key={index} style={styles.item}>
             <Text>{item.name}</Text>
             <Text>{item.price}</Text>
           </View>
           )
         })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  items: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  item: {
    width: '50%',
    padding: 5,
    borderWidth: 1,
    borderColor: '#000'
  }
})

export default Item;