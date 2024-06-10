import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { tryLogin } from '../store/actions';

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
        this.setState({ isLoading: false, message: 'Login successful!' });
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
    return <Button title='Login' onPress={this.tryLogin} />;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          placeholder='user@mail.com'
          value={this.state.email}
          onChangeText={value => this.onChangeHandler('email', value)}
          style={styles.input}
        />
        <Text style={styles.text}>Senha</Text>
        <TextInput
          placeholder='******'
          secureTextEntry
          value={this.state.password}
          onChangeText={value => this.onChangeHandler('password', value)}
          style={styles.input}
        />
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
  },
});

export default connect(null, { tryLogin })(LoginUser);
