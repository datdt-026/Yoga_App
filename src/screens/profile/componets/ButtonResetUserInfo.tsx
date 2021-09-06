import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../reduxs/store';
import {onResetUserInfo} from '../../../reduxs/userSlice';

const ButtonResetUserInfo = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Button
      title="Reset"
      onPress={() => {
        dispatch(onResetUserInfo());
      }}
    />
  );
};

export default ButtonResetUserInfo;

const styles = StyleSheet.create({});
