import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default class OfferItem extends React.PureComponent   {
  render() {
  	const offer = this.props.offer;
    return (      
      <View style={styles.container}>
        <View style={styles.containerLeft}>  
      		<Text style={styles.price}>€{offer.price}</Text>      		
      	</View>
      	<View style={styles.containerRight}>
      	  <Text style={styles.quantity}>Quantity: {offer.quantity}</Text>
      		<Text>Description: {offer.description}</Text>
      		<Text style={styles.quantity}>Seller: {offer.user.details.firstname}</Text>
      	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		margin: 10,
		marginBottom: 0,
		borderWidth: 1,
		borderColor: '#4487db',
		borderRadius: 10
	},
	containerLeft: {
		flex: 1,
		flexDirection: 'column',
		height: 100,		 
		justifyContent: 'space-around',
		alignItems: 'center',
		borderRightWidth: 1,
		borderRightColor: '#4487db' 
	},
	containerRight: {
		flex: 2,
		padding: 10
	},
	price: {
		fontSize: 25,
		fontWeight: '800',
		color: '#ff6363'
	},
	quantity: {
			
	}
});