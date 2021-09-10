import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import * as Icon from 'react-native-iconly';

const HeaderDeatailWorkout = () => {
  return (
    <View
      style={{
        paddingTop: getStatusBarHeight(true),
        paddingBottom: 12,
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 1,
      }}>
      <TouchableOpacity style={{marginLeft: 12}}>
        <Icon.ArrowLeft size={32} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderDeatailWorkout;

const styles = StyleSheet.create({});
