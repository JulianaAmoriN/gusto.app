import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ReviewCard = ({ review, onNavigate }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onNavigate}
  >
    <Image
      style={styles.image}
      source={{
        uri: review.imagens
      }}
    />
    <Text style={styles.text}>{`${review.restaurante}`}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#565656',
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: '90%',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReviewCard;
