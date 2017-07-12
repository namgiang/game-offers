import React from "react";
import { StyleSheet, Text, TouchableHighlight, Picker, View } from 'react-native';
import { connect } from "react-redux";
import { sortOffers } from "../actions";


class Sort extends React.Component {
	render() {
    return (
    	<View>
    		<Picker
				  selectedValue={this.props.sortOrder}
				  onValueChange={(itemValue, itemIndex) => this.props.dispatch(sortOffers(itemValue))}>
				  <Picker.Item label="Lowest to Highest" value="lowToHigh" />
				  <Picker.Item label="Highest to Lowest" value="highToLow" />
				</Picker>
		  </View>  
    );
  }
}

const styles = StyleSheet.create({
	button: {
		flex: .2,
		// width: Dimensions.get('window').width * .3,
		backgroundColor: '#fff',		
		borderWidth: 1,
		borderColor: '#4487db',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 10
	},
	text: {
		color: '#4487db',
		textAlign: 'center'
	}
});

export default connect((state) => ({
  sortOrder: state.data.sortOrder
}))(Sort);