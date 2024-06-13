import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { connect } from 'react-redux';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import ReviewCard from '../components/ReviewCard';
import CustomButton from '../components/CustomButton';

const ReviewsPage = ({ navigation, route }) => {
  const { user } = route.params;
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    const db = getFirestore();

    try {
      const q = query(collection(db, `users/${user.uid}/reviews`));
      const querySnapshot = await getDocs(q);

      const fetchedReviews = [];
      querySnapshot.forEach((doc) => {
        fetchedReviews.push({ id: doc.id, ...doc.data() });
      });

      setReviews(fetchedReviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      Alert.alert('Erro', 'Erro ao buscar reviews. Tente novamente mais tarde.');
    }
  };

  // Utilize o hook useFocusEffect para buscar as revisões sempre que a tela for focada
  useFocusEffect(
    React.useCallback(() => {
      fetchReviews();
    }, [user]) // Dependência 'user' para garantir que as revisões sejam atualizadas quando o usuário mudar
  );

  const handleNavigateToReviewDetail = (review) => {
    navigation.navigate('ReviewDetail', { review, user });
  };

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
            onNavigate={() => handleNavigateToReviewDetail(item)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
});

const mapStateToProps = (state) => ({
  // Mapeie o estado redux se necessário
});

export default connect(mapStateToProps)(ReviewsPage);
