import React from 'react';
import { StyleSheet, View } from 'react-native';

const FormButton = (props: any) => {
    const { children } = props;
    return(
        <View style={styles.container}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#565656',
        marginBottom: 10,
        padding: 15,
    }
});

export default FormButton;