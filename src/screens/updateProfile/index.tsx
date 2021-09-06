import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {RootStackParamList} from '../../nav/RootStack';
import {StackNavigationProp} from '@react-navigation/stack';
import Container from '../../components/Container';
import Txt from '../../components/Txt';
import useBoolean from '../../hooks/useBoolean';
import {useSelector} from 'react-redux';
import {RootState} from '../../reduxs/store';
import {IUserState} from '../../reduxs/userSlice';
import ButtonSubmit from './ButtonSubmit';
import ButtonUpdateTheme from './ButtonUpdateTheme';

type UpdateProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'UpdateProfile'
>;

const UpdateProfile = () => {
  const userInfo = useSelector<RootState, IUserState>(state => state.userInfo);
  const [updateUserInfo, setUpdateUserInfo] = React.useState(userInfo);
  const [showModal, onShowModal, onHideModal] = useBoolean();

  return (
    <Container>
      <View>
        <Txt>Ten</Txt>
        <TextInput
          placeholder="Ho va ten"
          defaultValue={userInfo.name}
          onChangeText={(name: string) => {
            setUpdateUserInfo({...updateUserInfo, name});
          }}
        />
      </View>
      <View>
        <Txt>Tuoi</Txt>
        <TextInput
          placeholder="Tuoi"
          defaultValue={userInfo.age}
          onChangeText={(age: string) => {
            setUpdateUserInfo({...updateUserInfo, age});
          }}
        />
      </View>

      <View>
        <Txt>Dia Chi</Txt>
        <TextInput
          placeholder="DiaChi"
          defaultValue={userInfo.address}
          onChangeText={(address: string) => {
            setUpdateUserInfo({...updateUserInfo, address});
          }}
        />
      </View>

      <ButtonSubmit updateUserInfo={updateUserInfo} />
      <ButtonUpdateTheme />

      <Button title="show modal" onPress={onShowModal} />
      {!!showModal && (
        <View style={{width: 100, height: 100, backgroundColor: 'red'}}>
          <Button title="hide Modal" onPress={onHideModal} />
        </View>
      )}
    </Container>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({});
