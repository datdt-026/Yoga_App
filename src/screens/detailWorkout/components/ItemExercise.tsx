import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, Card, Colors} from 'react-native-ui-lib';
import {IExercise} from '../../../type/IExercises';

interface Props {
  item: IExercise;
}

const ItemExercise = ({item}: Props) => {
  return (
    <Card
      style={styles.containerItem}
      onPress={() => console.log('press on  a card')}>
      <Card.Section
        imageSource={{uri: item.img}}
        imageStyle={{height: 190, width: 190}}
      />
      <View paddingL-16 paddingR-6 marginB-11>
        <Text m15 marginT-10 numberOfLines={1}>
          {item.name}
        </Text>
        <Text b13 color={Colors.dark70}>
          Calo : {item.calo_per_hour} /hour
        </Text>
        <View absT bg-white marginT-10 marginL-10 br100 paddingH-8 paddingV-2>
          <Text h8 color={Colors.dark70}>
            1 WEEk
          </Text>
        </View>
      </View>
    </Card>
  );
};

export default ItemExercise;

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.4,
    elevation: 2,
    marginHorizontal: 16,
    marginVertical: 8,
  },
});
