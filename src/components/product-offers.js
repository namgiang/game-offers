import React from "react";
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { connect } from "react-redux";
import { fetchData } from "../actions";

import OfferService from '../services/offers';

import OfferSummary from './offer-summary';
import OfferList from './offer-list';

class ProductOffers extends React.Component {
	constructor(props) {
		super(props);
		this.props.dispatch(fetchData());
	}
  render() {
  	const offerService = new OfferService(this.props.offers);
  	const summary = offerService.getSummary();
  	let offers = this.props.offers;
  	if (this.props.range) {
  	  offers = offerService.filterByPriceRange(this.props.range);
  	}
  	if (this.props.sortOrder) {
  		offers = offerService.sortByPrice(this.props.sortOrder, offers);
  	}
  	
    return offers.length > 0 ? (      
        <ScrollView 
          contentInset={{bottom: 0}}
 					automaticallyAdjustContentInsets={true}
				  >
        	<OfferSummary summary={summary} ></OfferSummary>
        	<OfferList offerService={offerService} offers={offers}></OfferList>
        </ScrollView>
        ) : <View><Text>Loading...</Text></View>;
  }
}

export default connect((state) => ({
  isFetching: state.data.isFetching,
  offers: state.data.offers || [],
  range: state.data.priceRange,
  sortOrder: state.data.sortOrder
}))(ProductOffers);