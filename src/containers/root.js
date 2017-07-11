import React from "react";
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import NavBarComponent from '../components/nav-bar';
import ProductOffers from '../components/product-offers';

export default class AppRoot extends React.Component {
  render() {
    return (      
        <View>
        	<NavBarComponent></NavBarComponent>
        	<ProductOffers></ProductOffers>
        </View>
    );
  }
}
