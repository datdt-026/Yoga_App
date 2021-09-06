import React from 'react';
import {StyleSheet, Dimensions, ScrollView} from 'react-native';
import {View, Image} from 'react-native-ui-lib';
import Banner from './components/Banner';
import ItemWorkout from './components/ItemWorkout';
import ListHorizontal from './components/ListHorizontal';
import ListWorkout from './components/ListWorkout';

const widthScreen = Dimensions.get('window').width;
const witdhImg = widthScreen;
const heightImg = (widthScreen / 375) * 256;

const New = () => {
  return (
    <View flex bg-white>
      <ListWorkout
        ListHeaderComponent={
          <>
            <Image
              assetGroup="imgNewScreen"
              assetName="ic_bg"
              width={witdhImg}
              height={heightImg}
            />
            <Banner />
            <ListHorizontal />
          </>
        }
      />
    </View>
  );
};

export default New;

const styles = StyleSheet.create({
  loopCarousel: {
    position: 'absolute',
    bottom: 15,
    left: 10,
  },
});
