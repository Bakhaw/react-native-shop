import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

import Item from './Item';

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

const styles = StyleSheet.create({
  items: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 20
  }
});

export default Items;