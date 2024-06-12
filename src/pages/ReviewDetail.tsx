import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class ReviewDetail extends Component {
  render() {
    const { review } = this.props.route.params;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{review.restaurante}</Text>
        <Image source={{ uri: review.imagens }} style={styles.image} />
        <View style={styles.box}>
          <Text style={styles.label}>Endereço:</Text>
          <Text style={styles.boxText}>{review.endereço}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.label}>Nota:</Text>
          <Text style={styles.boxText}>{review.nota}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.label}>Anotações:</Text>
          <Text style={styles.boxText}>{review.anotacao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  box: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dcdcdc',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  boxText: {
    fontSize: 18,
  },
});

export default ReviewDetail;
