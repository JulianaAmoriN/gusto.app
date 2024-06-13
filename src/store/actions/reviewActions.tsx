import { collection, addDoc, doc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { Alert } from 'react-native';

const db = getFirestore();

export const UPDATE_REVIEW_FIELD = 'UPDATE_REVIEW_FIELD';
export const RESET_REVIEW_FORM = 'RESET_REVIEW_FORM';

export const updateReviewField = (field: string, value: string) => ({
    type: UPDATE_REVIEW_FIELD,
    field,
    value,
});

export const resetReviewForm = () => ({
    type: RESET_REVIEW_FORM,
});

export const submitReview = (review) => async (dispatch: any) => {
  try {
      const userDocRef = doc(db, 'users', review.user);
      const reviewsCollectionRef = collection(userDocRef, 'reviews');
      const docRef = await addDoc(reviewsCollectionRef, review);
      console.log('Document written with ID: ', docRef.id);
      Alert.alert('Sucesso', 'Review adicionada com sucesso!');
  } catch (error) {
      console.error('Error adding document: ', error);
      Alert.alert('Erro', 'Ocorreu um erro ao adicionar a review. Tente novamente.');
  }
  dispatch(resetReviewForm());
};