import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import NavBar, {NavTitle} from 'react-native-nav';

export default class NavBarComponent extends React.Component {
  render() {
    return (      
        <NavBar style={styles}  >
	        <NavTitle style={styles.title} >
	          {"Game Offers"}
	        </NavTitle>
        </NavBar>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#64FFDA'
  },
  navBar: {
    backgroundColor: '#64FFDA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
  	color: '#000',
  	textAlign: 'center',
  	margin: 'auto'
  }
});