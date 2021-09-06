import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Button, Text, View, Colors} from 'react-native-ui-lib';
import {FONTS} from '../../../config/Typo';
import BtnLogin from './components/BtnLogin';
const Login = () => {
  const [infoLogin, setInfoLogin] = React.useState({
    email: 'san@gmail.com',
    password: 'admin123',
  });
  return (
    <View flex bg-white>
      <Text h27 primary margin-24 marginB-16>
        Connect email address
      </Text>
      <Text marginL-24 marginR-20 b16>
        It’s recommended to connect your email{'\n'}address for us to bettrt
        protect your{'\n'}information.
      </Text>

      <View flex centerV>
        <View marginH-24 marginB-32>
          <Text b17 dark80 marginB-16>
            Your Email
          </Text>
          <TextInput
            placeholder="Your Email"
            style={{fontSize: 17, fontFamily: FONTS.Book, color: Colors.dark30}}
            onChangeText={(email: string) => {
              setInfoLogin(prev => {
                return {...prev, email};
              });
            }}
          />
          <View height={1} bg-dark80 marginT-12 />
        </View>
        <View marginH-24 marginB-32>
          <Text b17 dark80 marginB-16>
            Password
          </Text>
          <TextInput
            placeholder="Your Password"
            secureTextEntry
            style={{fontSize: 17, fontFamily: FONTS.Book, color: Colors.dark30}}
            onChangeText={(password: string) => {
              setInfoLogin(prev => {
                return {...prev, password};
              });
            }}
          />
          <View height={1} bg-dark80 marginT-12 />
        </View>
      </View>
      <View flex marginH-24>
        <BtnLogin infoLogin={infoLogin} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
