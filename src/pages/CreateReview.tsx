import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';
import { connect } from 'react-redux';
import { updateReviewField, resetReviewForm, submitReview } from '../store/actions/reviewActions';
import CustomButton from '../components/CustomButton';
import StarRating from '../components/StarRating';
import Review from '../models/Reviwe';

interface CreateReviewProps {
    review: Review;
    updateReviewField: (field: string, value: string) => void;
    resetReviewForm: () => void;
    submitReview: (review: Review) => void;
    route: { params: { user: { uid: string } } };
}

interface CreateReviewState {
    starCount: number;
}

class CreateReview extends Component<CreateReviewProps, CreateReviewState> {
    state: CreateReviewState = {
        starCount: 0,
    };

    componentDidMount() {
        const { user } = this.props.route.params;
        this.props.updateReviewField('user', user.uid);
    }

    handleStarRating = (rating: number) => {
        const roundedRating = Math.round(rating * 100) / 100;
        this.setState({ starCount: roundedRating });
        this.props.updateReviewField('nota', roundedRating.toFixed(2));
    };

    resetStarCount = () => {
        this.setState({ starCount: 0 });
    };

    handleSubmit = () => {
        const { restaurante, endereco, comentarios, imagens, user } = this.props.review;
        const { starCount } = this.state;

        if (!restaurante || !endereco || !imagens || starCount === 0) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        const review = {
            restaurante,
            endereco,
            nota: starCount.toFixed(2),
            comentarios,
            imagens,
            user,
        };

        this.props.submitReview(review);
        this.resetStarCount();
    };

    render() {
        const { restaurante, endereco, comentarios, imagens } = this.props.review;
        const { starCount } = this.state;

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Criar Nova Review</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Restaurante"
                        value={restaurante}
                        onChangeText={(text) => this.props.updateReviewField('restaurante', text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Endereço"
                        value={endereco}
                        onChangeText={(text) => this.props.updateReviewField('endereco', text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="URL da Imagem"
                        value={imagens}
                        onChangeText={(text) => this.props.updateReviewField('imagens', text)}
                    />
                    <TextInput
                        style={[styles.input, styles.textarea]}
                        placeholder="Comentários"
                        value={comentarios}
                        onChangeText={(text) => this.props.updateReviewField('comentarios', text)}
                        numberOfLines={4}
                        multiline={true}
                    />
                    <StarRating
                        defaultRating={starCount}
                        onChangeRating={this.handleStarRating} 
                    />
                    <CustomButton
                        title="Enviar Review"
                        onPress={this.handleSubmit}
                    />
                </View>
            </ScrollView>
        );
    }
}

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
    },
    input: {
        height: 40,
        borderColor: '#dcdcdc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#ffffff',
    },
    textarea: {
        height: 120,
        textAlignVertical: 'top',
    },
});

const mapStateToProps = (state) => ({
    review: state.review,
});

const mapDispatchToProps = {
    updateReviewField,
    resetReviewForm,
    submitReview,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateReview);
