import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderLogo from './src/components/HeaderLogo';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <HeaderLogo title='Gusto'/>
      </View>
    );
  }
}