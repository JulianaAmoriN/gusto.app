import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 25,
    color: '#1D1D1D'
  }
});

const HeaderLogo = (props: any) => (
  <View style={styles.container}>
    <Text style={styles.title}>{ props.title }</Text>
  </View>
);

export default HeaderLogo;
