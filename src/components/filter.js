import React from "react";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { connect } from "react-redux";
import { setPriceRange } from "../actions";
import Slider from 'react-native-multi-slider';

class Filter extends React.Component  {
  render() {
  	const min = this.props.range[0];
  	const max = this.props.range[1];
  	const range = [this.props.min, this.props.max];
    return (
    	<View style={styles.container}>
        <Text style={styles.range}>€{min}-{max}</Text>
        <Slider values={range}
        				min={range[0]}
        				max={range[1] + 1}
        				selectedStyle={{backgroundColor: '#ff6363', margin: 'auto'}}
        				onValuesChange={values => this.props.dispatch(setPriceRange(values))}
        				/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	range: {
		color: '#ff6363',
		fontSize: 15,
		textAlign: 'center'
	},
	markerStyle: {
		height:30, 
		width: 30, 
		borderRadius: 15, 
		backgroundColor:'#4487db',
		borderWidth: 0.5, 
		borderColor: 'grey'
	}
});

export default connect((state, ownProps) => ({
  range: state.data.priceRange || [ownProps.min, ownProps.max]
}))(Filter);