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
    backgroundColor: '#4487db'
  },
  navBar: {
    backgroundColor: '#4487db',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
  	color: '#fff',
  	textAlign: 'center',
  	margin: 'auto'
  }
});