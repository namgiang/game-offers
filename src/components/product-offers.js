import React from "react";
import { StyleSheet, Text, View } from 'react-native';
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
    return (      
        <View>
        	<OfferSummary summary={summary} ></OfferSummary>
        	<OfferList offers={this.props.offers}></OfferList>
        </View>
    );
  }
}

export default connect((state) => ({
  isFetching: state.data.isFetching,
  offers: state.data.offers || []
}))(ProductOffers);