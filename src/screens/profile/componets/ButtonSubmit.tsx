import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../../nav/RootStack';

interface Props {
  userInfo: {
    name: string;
    age: string;
    address: string;
  };
}

const ButtonSubmit = ({userInfo}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Button
      title="Cap nhat thong tin"
      onPress={() => {
        navigation.navigate('UpdateProfile', {
          name: userInfo.name,
          age: userInfo.age,
          address: userInfo.address,
        });
      }}
    />
  );
};

export default ButtonSubmit;

const styles = StyleSheet.create({});
