import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Button, Switch, View} from 'react-native';
import Container from '../../components/Container';
import Txt from '../../components/Txt';
import useBoolean from '../../hooks/useBoolean';
import ButtonSubmit from './componets/ButtonSubmit';
import {useSelector} from 'react-redux';
import {RootState} from '../../reduxs/store';
import {IUserState} from '../../reduxs/userSlice';
import ButtonResetUserInfo from './componets/ButtonResetUserInfo';

const Profile = React.memo(() => {
  const userInfo = useSelector<RootState, IUserState>(state => state.userInfo);
  const [valueSwitch, setValueSwitch] = React.useState<boolean>(false);
  const [showModal, onShowModal, onHideModal] = useBoolean();

  return (
    <Container>
      <Txt>{`Ten: ${userInfo.name}`}</Txt>
      <Txt>{`Tuoi: ${userInfo.age}`}</Txt>
      <Txt>{`Dia chi: ${userInfo.address}`}</Txt>

      <ButtonSubmit
        userInfo={{
          name: userInfo.name,
          age: userInfo.age,
          address: userInfo.address,
        }}
      />

      <ButtonResetUserInfo />

      <Switch value={valueSwitch} onValueChange={setValueSwitch} />

      <Button title="show Modal" onPress={onShowModal} />
      {!!showModal && (
        <View style={{width: 100, height: 100, backgroundColor: 'red'}}>
          <Button title="Hide Modal" onPress={onHideModal} />
        </View>
      )}
    </Container>
  );
});

export default Profile;

const styles = StyleSheet.create({});
