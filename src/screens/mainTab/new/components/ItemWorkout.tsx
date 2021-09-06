import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Text, View, Colors, Card, Image} from 'react-native-ui-lib';
import {IWorkout} from '../../../../../IWorkout';

const widthScreen = Dimensions.get('window').width;

const ItemWorkout = ({item}: {item: IWorkout}) => {
  return (
    <View centerH marginV-12>
      <Card
        style={styles.container}
        onPress={() => console.log('press on a card')}>
        <View row>
          <View
            backgroundColor={'#F7B500'}
            br100
            marginT-10
            marginL-10
            paddingV-2
            paddingH-8>
            <Text h8 color={Colors.white}>
              PRO
            </Text>
          </View>
        </View>

        <View paddingL-16 paddingR-6 marginB-11>
          <Text h16 marginT-10 numberOfLines={1} color={'#6F6F6F'}>
            {item.name}
          </Text>
          <Text b13 color={'#7E7D7D'}>
            Calo: {item.calo}/hour
          </Text>
        </View>
        <View style={{...StyleSheet.absoluteFillObject, zIndex: -1}}>
          <Image
            overlayType={Image.overlayTypes.BOTTOM}
            style={{flex: 1}}
            source={{uri: item.exercise_items[0]?.exercise.img}}
            resizeMode="contain"
          />
        </View>
      </Card>
    </View>
  );
};

export default ItemWorkout;

const styles = StyleSheet.create({
  container: {
    width: widthScreen - 32,
    backgroundColor: '#E1E4E8',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    overflow: 'hidden',
  },
});
