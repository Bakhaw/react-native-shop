import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';

class Item extends Component {
  render() {
    return (

      <Card containerStyle={{padding: 0}} >
      {
        this.props.items.map((item, index) => {
          return (
            <View>
              <ListItem
              key={index}
              roundAvatar
              title={`${item.name} - ${item.price}`}
              avatar={{uri: item.img}}
              />
              <Button title='add' onPress={() => this.props.addToBasket(item)}/>
            </View>
          );
        })
      }
    </Card>
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
    width: '100%',
    padding: 5,
    borderWidth: 1,
    borderColor: '#000'
  }
})

export default Item;