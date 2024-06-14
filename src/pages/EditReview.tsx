import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { updateReview } from '../store/actions/reviewActions';
import CustomButton from '../components/CustomButton';
import StarRating from '../components/StarRating';

const EditReview = ({ route, navigation, updateReview }) => {
    const { review, user } = route.params;
    const [comentarios, setComentarios] = useState(review.comentarios);
    const [nota, setNota] = useState(parseFloat(review.nota).toFixed(2));

    const handleSaveReview = async () => {
        const updatedReview = {
            ...review,
            comentarios,
            nota,
        };
        await updateReview(user.uid, review.id, updatedReview);
        navigation.navigate('ReviewDetail', { review: updatedReview, user });
    };

    const handleCancel = () => {
        navigation.goBack();
    };

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title}>Editar Review: {review.restaurante}</Text>
                <Image source={{ uri: review.imagens }} style={styles.image} />
                <Text style={styles.label}>Endereço:</Text>
                <Text style={styles.text}>{review.endereco}</Text>
                <Text style={styles.label}>Comentários:</Text>
                <TextInput
                    style={styles.input}
                    value={comentarios}
                    onChangeText={setComentarios}
                    multiline={true}
                    numberOfLines={4}
                />
                <StarRating
                    defaultRating={parseFloat(nota)}
                    onChangeRating={setNota}
                />
                <View>
                    <CustomButton
                        title="Confirmar"
                        onPress={handleSaveReview}
                        style={styles.button}
                    />
                    <CustomButton
                        title="Cancelar"
                        onPress={handleCancel}
                        style={styles.colorButton}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        marginTop: 20,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
    input: {
        borderColor: '#dcdcdc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10,
        backgroundColor: '#ffffff',
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
    },
    colorButton: {
        backgroundColor: '#9D9D9D',
    },
});

export default connect(null, { updateReview })(EditReview);
