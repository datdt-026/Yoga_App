import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../reduxs/store';
import {
  darkTheme,
  ITheme,
  lightTheme,
  onUpdateTheme,
} from '../../reduxs/themeSlice';

const ButtonUpdateTheme = () => {
  const isThemeLight = useSelector<RootState, boolean>(
    state => state.theme.isThemeLight,
  );
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Button
      title="Cap nhat Theme"
      onPress={() => {
        if (isThemeLight) {
          dispatch(onUpdateTheme(darkTheme));
        } else {
          dispatch(onUpdateTheme(lightTheme));
        }
      }}
    />
  );
};

export default ButtonUpdateTheme;

const styles = StyleSheet.create({});
