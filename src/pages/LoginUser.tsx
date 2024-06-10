import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, ActivityIndicator } from 'react-native';
import FormButton from '../components/FormButton';
import { connect } from 'react-redux'
import { tryLogin } from '../store/actions';

class LoginUser extends React.Component {
    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            password: '',
            isLoading: false,
        }
    }

    onChengeHandler(field: string, value: string) {
        this.setState({
            [field]: value
        });
    }

    tryLogin() {
        this.setState({ isLoading: true, message: '' });
        const { email, password } = this.state;

        this.props;tryLogin({ email, password });
    }

    getMessageByErrorCode(errorCode) {
        switch (errorCode) {
            case 'auth/invalid-credential':
                return 'Credencial inválida.'
                break;
            case 'auth/invalid-email':
                return 'Email inválido.'
                break;
            case 'auth/missing-password':
                return 'Insira a senha.'
                break;
            default:
                return 'Erro desconhecido.';
        }
    }

    renderMessage() {
        const { message } = this.state;
        if (!message)
            return null;

        return (
            <View>
                <Text>{message}</Text>
            </View>
        )
    }

    renderButton() {
        if (this.state.isLoading)
            return <ActivityIndicator />;

        return (
            <Button
                title='Login'
                onPress={() => this.tryLogin()}
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Email</Text>
                <FormButton>
                    <TextInput
                        placeholder='user@mail.com'
                        value={this.state.email}
                        onChangeText={value => this.onChengeHandler('email', value)}
                    />
                </FormButton>

                <Text style={styles.text} >Senha</Text>
                <FormButton>
                    <TextInput
                        placeholder='******'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChengeHandler('password', value)}
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
});

export default connect(null, { tryLogin })(LoginUser);