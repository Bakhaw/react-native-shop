import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';

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
                  subtitle={`${item.price}€`}
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

const styles = StyleSheet.create({
  basket: {
    width: '100%',    
    borderWidth: 1,
    borderColor: 'black',
    padding: 20
  }
});

export default Basket;