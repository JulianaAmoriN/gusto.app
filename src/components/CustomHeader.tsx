import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const isInitialScreen = route.name === 'ReviewsPage';

  return (
    <View>
      <View style={styles.header}>
        {!isInitialScreen && (
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="arrow-back" size={25} color="#1D1D1D" />
          </TouchableOpacity>
        )}
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      <View style={styles.headerLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 15,
  },
  headerTitle: {
    fontSize: 25,
    color: '#1D1D1D',
    fontWeight: 'bold',
  },
  headerLine: {
    height: 1,
    backgroundColor: '#dcdcdc',
  },
});

export default CustomHeader;
