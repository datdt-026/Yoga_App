import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {RootStackParamList} from '../../nav/RootStack';
import {AppDispatch} from '../../reduxs/store';
import {onUpdateUserInfo} from '../../reduxs/userSlice';

interface Props {
  updateUserInfo: {
    name: string;
    age: string;
    address: string;
  };
}

const ButtonSubmit = ({updateUserInfo}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Button
      title="Cap nhat"
      onPress={() => {
        dispatch(onUpdateUserInfo(updateUserInfo));
        navigation.goBack();
      }}
    />
  );
};

export default ButtonSubmit;

const styles = StyleSheet.create({});
