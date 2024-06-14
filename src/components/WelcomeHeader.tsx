import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WelcomeHeader = ({ welcomeText }) => (
  <View style={styles.container}>
    <Image source={require('../../assets/logo-gusto.png')} style={styles.logo} />
    <Text style={styles.text}>{welcomeText}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default WelcomeHeader;
