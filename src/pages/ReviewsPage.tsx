import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import reviews from '../../reviews.json';
import ReviewCard from '../components/ReviewCard';
import CustomButton from '../components/CustomButton';

const ReviewsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomButton
        title="Criar Nova Review"
        onPress={() => navigation.navigate('CreateReview')}
        //style={styles.button}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <ReviewCard
            review={item}
            onNavigate={() => navigation.navigate('ReviewDetail', { review: item })}
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
