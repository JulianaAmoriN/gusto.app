import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import reviews from '../../reviews.json';
import ReviewCard from '../components/ReviewCard'

const ReviewsPage = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <View>
            <ReviewCard review={item} />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
});

export default ReviewsPage;
