// ReviewsPage.js
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import reviews from '../../reviews.json';
import ReviewCard from '../components/ReviewCard';
import CustomButton from '../components/CustomButton';

const ReviewsPage = ({ navigation, route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <CustomButton
        title="Criar Nova Review"
        onPress={() => navigation.navigate('CreateReview', { user })}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <ReviewCard
            review={item}
            onNavigate={() => navigation.navigate('ReviewDetail', { review: item, user })}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  }
});

export default ReviewsPage;
