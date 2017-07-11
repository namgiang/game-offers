import React from "react";
import { StyleSheet, FlatList } from 'react-native';

import OfferItem from './offer-item';

export default class OfferList extends React.PureComponent  {
  render() {
    return (
      <FlatList
			  data={this.props.offers}
			  keyExtractor={(item, index) => item.id}
			  style={{marginTop: 5}}
			  renderItem={({item}) => (<OfferItem key={item.id} 
			  																		offer={item}>
			  												 </OfferItem>)}
			/>
    );
  }
}