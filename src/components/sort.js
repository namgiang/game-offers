import React from "react";
import { StyleSheet, Text, TouchableHighlight, Picker, View } from 'react-native';
import { connect } from "react-redux";
import { sortOffers } from "../actions";


class Sort extends React.Component {
	render() {
    return (
    	<View style={styles.container}>
    		<Picker
				  selectedValue={this.props.sortOrder}
				  onValueChange={(itemValue, itemIndex) => this.props.dispatch(sortOffers(itemValue))}>
				  <Picker.Item label="Sort" value="noOrder" />
				  <Picker.Item label="Lowest to Highest" value="lowToHigh" />
				  <Picker.Item label="Highest to Lowest" value="highToLow" />
				</Picker>
		  </View>  
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: .8
	},
	sortPicker: {
		display: 'none'
	}
});

export default connect((state) => ({
  sortOrder: state.data.sortOrder
}))(Sort);