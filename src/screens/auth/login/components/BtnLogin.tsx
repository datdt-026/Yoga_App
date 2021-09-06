import React from 'react';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Colors, Text} from 'react-native-ui-lib';
import {useDispatch} from 'react-redux';
import URL from '../../../../config/Api';
import {IAuth, onLogin, saveAuthAsync} from '../../../../reduxs/authSlices';

interface Props {
  infoLogin: {
    email: string;
    password: string;
  };
}

const BtnLogin = ({infoLogin}: Props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState<boolean>(false);
  const onPressLogin = React.useCallback(() => {
    setLoading(true);
    fetch(URL.Login, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Connect-Type': 'application/json',
      },
      body: JSON.stringify({
        email: infoLogin.email,
        password: infoLogin.password,
      }),
    })
      .then(response => response.json())
      .then((json: IAuth) => {
        console.log('json', json);
        const success = json.success;

        //login failed
        if (!success) {
          Alert.alert('Thong bao', json.message);
          setLoading(false);

          return;
        }

        //login success
        dispatch(onLogin(json));
        setLoading(false);
        saveAuthAsync(json); //save token to async storage
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  }, [infoLogin]);

  return (
    <TouchableOpacity
      style={styles.btnLogin}
      onPress={onPressLogin}
      disabled={!!loading}>
      {!!loading ? (
        <ActivityIndicator color={Colors.white} />
      ) : (
        <Text h16 white>
          Login
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default BtnLogin;

const styles = StyleSheet.create({
  btnLogin: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 99,
  },
});
