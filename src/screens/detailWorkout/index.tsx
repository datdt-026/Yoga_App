import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Animated} from 'react-native';
import {RootStackParamList} from '../../nav/RootStack';
import {Assets, Colors, Text, View, Image} from 'react-native-ui-lib';
import * as Icon from 'react-native-iconly';
import dayjs from 'dayjs';
import ItemExercise from './components/ItemExercise';
import HeaderDeatailWorkout from './components/HeaderDeatailWorkout';

const widthBanner = Dimensions.get('window').width;
const heightBanner = (widthBanner / 1600) * 1000;
const imgBackgrounds = [
  Assets.imgWorkout.imgWorkour1,
  Assets.imgWorkout.imgWorkour2,
  Assets.imgWorkout.imgWorkour3,
  Assets.imgWorkout.imgWorkour4,
  Assets.imgWorkout.imgWorkour5,
  Assets.imgWorkout.imgWorkour6,
  Assets.imgWorkout.imgWorkour7,
  Assets.imgWorkout.imgWorkour8,
  Assets.imgWorkout.imgWorkour9,
  Assets.imgWorkout.imgWorkour10,
];

const DetailWorkout = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'DetailWorkout'>>();
  const workout = route.params.item;

  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{flex: 1}}>
      <HeaderDeatailWorkout scrollY={scrollY} />
      <Animated.ScrollView
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                x: scrollY,
              },
            },
          },
        ])}>
        <View
          style={{
            height: heightBanner,
            width: widthBanner,
          }}>
          <Image
            source={imgBackgrounds[workout.muscle_part_id % 10]}
            style={{
              height: heightBanner,
              width: widthBanner,
            }}
            overlayType={Image.overlayTypes.BOTTOM}
          />
        </View>
        <Text h28 marginL-16 marginV-12>
          {workout.name}
        </Text>
        <View row centerV marginH-16 paddingV-4>
          <Icon.Chat color={Colors.grey10} />
          <Text marginL-12>Hoat dong: {workout.commentCount} comment </Text>
        </View>
        <View row centerV marginH-16 paddingV-4>
          <Icon.Calendar color={Colors.grey10} />
          <Text marginL-12>
            Ngay tao: {dayjs(workout.created_at).format('MM/DD/YYYY')}{' '}
          </Text>
        </View>
        <View row centerV marginH-16 paddingV-4 marginB-12>
          <Icon.Work color={Colors.grey10} />
          <Text marginL-12>Calo tieu thu: {parseInt(workout.calo, 10)} </Text>
        </View>
        {workout.exercise_items.map(item => {
          <ItemExercise item={item.exercise} key={item.id} />;
        })}
      </Animated.ScrollView>
    </View>
  );
};

export default DetailWorkout;

const styles = StyleSheet.create({});
