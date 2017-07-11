import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import configureStore from "./src/store/configure-store";
import AppRoot from './src/containers/root';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoot></AppRoot>
      </Provider>
    );
  }
}