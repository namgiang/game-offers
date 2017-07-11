import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default class OfferSummary extends React.Component {
  render() {
    return (      
        <View>
        	<Text>{this.props.summary.productName}</Text>
        	<Text>{this.props.summary.averagePrice}</Text>
        </View>
    );
  }
}