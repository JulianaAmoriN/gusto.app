import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { tryLogin } from '../store/actions';
import FormButton from '../components/FormButton';
import CustomButton from '../components/CustomButton';

class LoginUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoading: false,
            message: '',
        };
    }

    onChangeHandler = (field, value) => {
        this.setState({ [field]: value });
    }

    tryLogin = () => {
        this.setState({ isLoading: true, message: '' });
        const { email, password } = this.state;

        this.props.tryLogin({ email, password })
            .then(user => {
                this.setState({ isLoading: false });
                this.props.navigation.replace('ReviewsPage'); // Usar replace para bloquear o retorno à página de login
            })
            .catch(error => {
                this.setState({ isLoading: false, message: this.getMessageByErrorCode(error.code) });
            });
    }

    getMessageByErrorCode = (errorCode) => {
        switch (errorCode) {
            case 'auth/invalid-credential':
                return 'Credencial inválida.';
            case 'auth/invalid-email':
                return 'Email inválido.';
            case 'auth/missing-password':
                return 'Insira a senha.';
            default:
                return 'Erro desconhecido.';
        }
    }

    renderMessage = () => {
        const { message } = this.state;
        if (!message) return null;
        return <View><Text>{message}</Text></View>;
    }

    renderButton = () => {
        if (this.state.isLoading) return <ActivityIndicator />;
        return (
          <CustomButton
            title='Login'
            onPress={this.tryLogin}
          />
        );
      }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Email</Text>
                <FormButton>
                    <TextInput
                        keyboardType='email-address'
                        placeholder='user@mail.com'
                        value={this.state.email}
                        onChangeText={value => this.onChangeHandler('email', value)}
                    />
                </FormButton>
                <Text style={styles.text}>Senha</Text>
                <FormButton>
                    <TextInput
                        autoCapitalize='none'
                        placeholder='******'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}
                    />
                </FormButton>
                {this.renderButton()}
                {this.renderMessage()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
    },
    text: {
        color: '#565656',
    },
    button: {
        borderRadius: 10,
        backgroundColor: '#A63D40',
    }
});

export default connect(null, { tryLogin })(LoginUser);
