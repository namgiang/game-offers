import React from "react";
import { Image, StyleSheet, Text, View } from 'react-native';

class OfferSummary extends React.Component {
  render() {
  	const summary = this.props.summary;
    return (
      <View style={styles.summary}>
        <Image style={styles.image} source={{uri: summary.image}} />        
      	<Text style={styles.productName}>{summary.productName}</Text>
      	<Text style={styles.averagePrice}>
      	  <Text>Average Price: </Text>
      	  <Text style={styles.price}>€{summary.averagePrice}</Text>
      	</Text>      
      </View>         
    );
  }
}

OfferSummary.propTypes = {
	summary: React.PropTypes.object.isRequired
};

const styles = StyleSheet.create({
	summary: {
		padding: 15,
		justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
	},
	image: {
		width: 200, 
		height: 200,
		margin: 'auto'
	},
	productName: {
		color: '#4487db',
		fontSize: 30,
		fontWeight: '800',
		marginTop: 10,
		textAlign: 'center'
	},
	averagePrice: {
		fontSize: 25,
		textAlign: 'center'
	},
	price: {		
		fontWeight: '500',
		color: '#ff6363'
	}
});

export default OfferSummary;