import React from 'react';
import {Image, StyleSheet, Dimensions, TextInput} from 'react-native';
import {View, Text, Colors, Button} from 'react-native-ui-lib';
const width = Dimensions.get('window').width;

const SignUp = () => {
  return (
    <View>
      <View center>
        <Text primary h27>
          Connect emaill address
        </Text>
        <Text h16 dark70 marginT-16>
          It’s recommended to connect your email{'\n'}address for us to bettrt
          protect your{'\n'}information.
        </Text>
      </View>
      <View marginL-24 marginT-67>
        <Text>Your Email</Text>
        <TextInput placeholder="email" />
      </View>
      <View marginL-24 marginT-67>
        <Text>Set Password</Text>
        <TextInput placeholder="password" />
      </View>
      <View centerH marginT-120>
        <Button label="Confirm" marginB-20 style={{width: width - 82}} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
