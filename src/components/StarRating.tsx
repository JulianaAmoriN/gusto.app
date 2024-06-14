// components/StarRating.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';

const StarRating = ({ defaultRating, onChangeRating }) => {
    const [rating, setRating] = useState(defaultRating.toFixed(2)); // Convertendo para duas casas decimais

    const handleRating = (newRating) => {
        const roundedRating = parseFloat(newRating.toFixed(2)); // Garantindo duas casas decimais
        setRating(roundedRating.toFixed(2)); // Atualizando state com duas casas decimais
        onChangeRating(roundedRating); // Chamando a função de onChangeRating com o novo valor
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nota:</Text>
            <Rating
                type="custom"
                ratingCount={5}
                startingValue={parseFloat(rating)} // Convertendo para float
                imageSize={40}
                ratingColor="#f1c40f"
                ratingBackgroundColor="#c8c7c8"
                onFinishRating={handleRating}
                fractions={2} // Permitindo até duas casas decimais
                style={{ paddingVertical: 10 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        borderColor: '#dcdcdc',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        padding: 10,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default StarRating;
