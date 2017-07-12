import React from "react";
import { FlatList, StyleSheet, View } from 'react-native';

import Filter from './filter';
import Sort from './sort';
import OfferItem from './offer-item';

export default class OfferList extends React.PureComponent  {
  render() {
  	const offerService = this.props.offerService;
  	const offers = this.props.offers;
    return (
    	<View>
    	  <View style={styles.controlPanel}>
    	    <Filter style={styles.filter}
    	    				min={offerService.getMinPrice()}
    	    				max={offerService.getMaxPrice()}>
    	    </Filter>
    	    <Sort style={styles.sort}></Sort>
    	  </View>	
	      <FlatList
				  data={offers}
				  keyExtractor={(item, index) => item.id}
				  style={{paddingBottom:100}}
          automaticallyAdjustContentInsets={false}
				  renderItem={({item}) => (<OfferItem key={item.id} 
				  																		offer={item}>
				  												 </OfferItem>)}
				/>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	controlPanel: {
		// height: 30,
		margin: 10,
	},
	filter: {
		// flex: 0.7
	},
	sort: {
		flex: 0.6,
		margin: 'auto'
	}
})