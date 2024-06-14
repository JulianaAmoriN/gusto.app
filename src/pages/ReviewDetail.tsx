import React from 'react';
import { View, Text, StyleSheet, Image, Alert, ScrollView } from 'react-native';
import { Rating } from 'react-native-ratings';
import { RouteProp } from '@react-navigation/native';
import { connect } from 'react-redux';
import { deleteReview } from '../store/actions/reviewActions';
import CustomButton from '../components/CustomButton';
import Review from '../models/Reviwe';

interface ReviewDetailProps {
    route: RouteProp<{ params: { review: Review, user: User } }, 'params'>;
    navigation: any;
    deleteReview: (userId: string, reviewId: string) => void;
}

interface User {
    uid: string;
}

const ReviewDetail: React.FC<ReviewDetailProps> = ({ route, navigation, deleteReview }) => {
    const { review, user } = route.params;

    const handleDeleteReview = async () => {
        Alert.alert(
            'Confirmar exclusão',
            'Tem certeza que deseja excluir esta review?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Confirmar',
                    onPress: () => confirmDeleteReview()
                }
            ]
        );
    };

    const confirmDeleteReview = async () => {
        try {
            await deleteReview(user.uid, review.id);
            navigation.goBack();
        } catch (error) {
            console.error('Erro ao deletar review:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao deletar a review. Tente novamente.');
        }
    };

    const handleEditReview = () => {
        navigation.navigate('EditReview', { review, user });
    };

    const refreshReviewData = (updatedReview: Review) => {
        route.params.review = updatedReview;
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <Text style={styles.title}>{review.restaurante}</Text>
                <Image source={{ uri: review.imagens }} style={styles.image} />
                <View style={styles.box}>
                    <Text style={styles.label}>Nota:</Text>
                    <Rating
                        type="star"
                        ratingCount={5}
                        imageSize={40}
                        startingValue={parseFloat(review.nota)}
                        readonly
                        style={{ paddingVertical: 10 }}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.label}>Endereço:</Text>
                    <Text style={styles.boxText}>{review.endereco}</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.label}>Review:</Text>
                    <Text style={styles.boxText}>{review.comentarios}</Text>
                </View>
                <CustomButton
                    title="Editar Review"
                    onPress={handleEditReview}
                    style={styles.button}
                />
                <CustomButton
                    title="Deletar Review"
                    onPress={handleDeleteReview}
                    style={styles.colorButton}
                />
                <View />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
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
    button: {
        marginTop: 10,
        marginBottom: 10,
    },
    colorButton: {
        backgroundColor: '#9D9D9D',
    },
});

export default connect(null, { deleteReview })(ReviewDetail);
