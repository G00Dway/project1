import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../components/CustomHeader';

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <CustomHeader title="Home Page" />
      <Text style={styles.text}>Welcome to the Home Page!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default HomePage;
