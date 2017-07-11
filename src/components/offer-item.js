import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default class OfferItem extends React.PureComponent   {
  render() {
  	// console.log(this.props.offer);
    return (      
        <View>
        	<Text>{this.props.offer.price}</Text>
        </View>
    );
  }
}