import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

class CreateReview extends Component {
    state = {
        restaurante: '',
        endereco: '',
        nota: '',
        comentarios: '',
        imagens: '',
    };

    handleInputChange = (field, value) => {
        this.setState({ [field]: value });
    };

    handleSubmit = () => {
        // Lógica para enviar a nova review
        console.log('Nova Review:', this.state);
        // Depois de enviar a review, você pode navegar de volta ou fazer outra ação
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Criar Nova Review</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Restaurante"
                    value={this.state.restaurante}
                    onChangeText={(text) => this.handleInputChange('restaurante', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Endereço"
                    value={this.state.endereco}
                    onChangeText={(text) => this.handleInputChange('endereco', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="URL da Imagem"
                    value={this.state.imagens}
                    onChangeText={(text) => this.handleInputChange('imagens', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Nota"
                    value={this.state.nota}
                    onChangeText={(text) => this.handleInputChange('nota', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Comentários"
                    value={this.state.comentarios}
                    onChangeText={(text) => this.handleInputChange('comentarios', text)}
                />
                <CustomButton
                    title="Enviar Review"
                    onPress={this.handleSubmit}
                    style={styles.button}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
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
    button: {
        marginBottom: 20,
    },
});

export default CreateReview;
