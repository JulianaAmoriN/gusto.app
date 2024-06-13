import { getFirestore, collection, query, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { Alert } from 'react-native';

const db = getFirestore();

export const UPDATE_REVIEW_FIELD = 'UPDATE_REVIEW_FIELD';
export const RESET_REVIEW_FORM = 'RESET_REVIEW_FORM';
export const SET_REVIEWS = 'SET_REVIEWS';
export const SUBMIT_REVIEW_REQUEST = 'SUBMIT_REVIEW_REQUEST';
export const SUBMIT_REVIEW_SUCCESS = 'SUBMIT_REVIEW_SUCCESS';
export const SUBMIT_REVIEW_FAILURE = 'SUBMIT_REVIEW_FAILURE';
export const DELETE_REVIEW_REQUEST = 'DELETE_REVIEW_REQUEST';
export const DELETE_REVIEW_SUCCESS = 'DELETE_REVIEW_SUCCESS';
export const DELETE_REVIEW_FAILURE = 'DELETE_REVIEW_FAILURE';
export const EDIT_REVIEW_REQUEST = 'EDIT_REVIEW_REQUEST';
export const EDIT_REVIEW_SUCCESS = 'EDIT_REVIEW_SUCCESS';
export const EDIT_REVIEW_FAILURE = 'EDIT_REVIEW_FAILURE';

export const updateReviewField = (field, value) => ({
    type: UPDATE_REVIEW_FIELD,
    field,
    value,
});

export const resetReviewForm = () => ({
    type: RESET_REVIEW_FORM,
});

export const setReviews = (reviews) => ({
    type: SET_REVIEWS,
    reviews,
});

//create
export const submitReview = (review) => async (dispatch) => {
    dispatch({ type: SUBMIT_REVIEW_REQUEST });

    try {
        const userDocRef = doc(db, 'users', review.user);
        const reviewsCollectionRef = collection(userDocRef, 'reviews');
        const docRef = await addDoc(reviewsCollectionRef, review);
        console.log('Document written with ID: ', docRef.id);
        dispatch({ type: SUBMIT_REVIEW_SUCCESS });
        Alert.alert('Sucesso', 'Review salva com sucesso!');
    } catch (error) {
        dispatch({ type: SUBMIT_REVIEW_FAILURE, error: error.message });
        console.error('Error adding document: ', error);
        Alert.alert('Erro', 'Ocorreu um erro ao adicionar a review. Tente novamente.');
    }
    dispatch(resetReviewForm());
};

//read
export const fetchReviews = (userId) => async (dispatch) => {
    try {
        const userDocRef = doc(db, 'users', userId);
        const reviewsCollectionRef = collection(userDocRef, 'reviews');
        const q = query(reviewsCollectionRef);
        const querySnapshot = await getDocs(q);

        const fetchedReviews = [];
        querySnapshot.forEach((doc) => {
            fetchedReviews.push({ id: doc.id, ...doc.data() });
        });

        dispatch(setReviews(fetchedReviews));
    } catch (error) {
        console.error('Error fetching reviews:', error);
        Alert.alert('Erro', 'Erro ao buscar reviews. Tente novamente mais tarde.');
    }
};

//update
export const editReview = (userId, reviewId, updatedReview) => async (dispatch) => {
    dispatch({ type: EDIT_REVIEW_REQUEST });

    try {
        const reviewDocRef = doc(db, `users/${userId}/reviews`, reviewId);
        await updateDoc(reviewDocRef, updatedReview);
        dispatch({ type: EDIT_REVIEW_SUCCESS });
        Alert.alert('Sucesso', 'Review salva com sucesso!');
    } catch (error) {
        dispatch({ type: EDIT_REVIEW_FAILURE, error: error.message });
        console.error('Error updating document: ', error);
        Alert.alert('Erro', 'Ocorreu um erro ao editar a review. Tente novamente.');
    }
};

//delete
export const deleteReview = (userId, reviewId) => async (dispatch) => {
    dispatch({ type: DELETE_REVIEW_REQUEST });

    try {
        const reviewDocRef = doc(db, `users/${userId}/reviews`, reviewId);
        await deleteDoc(reviewDocRef);
        dispatch({ type: DELETE_REVIEW_SUCCESS });
        Alert.alert('Sucesso', 'Review deletada com sucesso!');
    } catch (error) {
        dispatch({ type: DELETE_REVIEW_FAILURE, error: error.message });
        console.error('Error deleting document: ', error);
        Alert.alert('Erro', 'Ocorreu um erro ao deletar a review. Tente novamente.');
    }
};
