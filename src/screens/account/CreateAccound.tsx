import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
import {View, Text, Colors, Button} from 'react-native-ui-lib';
import {RootStackParamList} from '../../nav/RootStack';

const witdh = Dimensions.get('window').width;

type UpdateCreateScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

type Props = {
  navigation: UpdateCreateScreenNavigationProp;
};

const CreateAccound = ({navigation}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        width: witdh,
        height: '100%',
        backgroundColor: '#FFF',
        alignItems: 'center',
      }}>
      <Image source={require('../../assets/create_Acc.png')} />
      <View center>
        <Text primary h27>
          Change starts here
        </Text>
        <Text h16 center dark70>
          Save your progress to access your personal{'\n'}trainning program!
        </Text>
      </View>
      <View flex bottom centerH>
        <Button
          label="EMAIL"
          marginB-20
          style={{width: witdh - 82}}
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
        <Button
          label="FACEBOOK"
          marginB-20
          backgroundColor="#576DFF"
          style={{width: witdh - 82}}
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
        <Button
          label="GOOGLE"
          dark10
          marginB-20
          backgroundColor="#FFF"
          style={{width: witdh - 82}}
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
    </View>
  );
};

export default CreateAccound;

const styles = StyleSheet.create({});
