import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../components/CustomHeader';

const DetailsPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <CustomHeader title="Details Page" />
      <Text style={styles.text}>This is the Details Page.</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
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

export default DetailsPage;
