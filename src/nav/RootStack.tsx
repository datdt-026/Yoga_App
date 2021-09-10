import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screens/onboarding';
import Login from '../screens/auth/login';
import MainTab from './MainTab';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../reduxs/store';
import {
  EStatusAuth,
  getAuthAsync,
  IAuth,
  onLogin,
  updateStatusAuth,
} from '../reduxs/authSlices';
import {View, Colors} from 'react-native-ui-lib';
import {ActivityIndicator, Alert} from 'react-native';
import URL from '../config/Api';
import DetailWorkout from '../screens/detailWorkout';
import {IWorkout} from '../../IWorkout';

export type RootStackParamList = {
  ProWelcomfile: undefined;
  OnBoarding: undefined;
  CreateAccound: undefined;
  SignUp: undefined;
  MainTab: undefined;
  Setting: undefined;
  CategoryDetail: undefined;
  CategoryDetailSub: undefined;
  TopicDetail: undefined;
  ProfileAndFriend: undefined;
  ProfileCouponsVouchers: undefined;
  MyTopic: undefined;
  Search: undefined;
  FAQ: undefined;
  Filter: undefined;
  Login: undefined;

  DetailWorkout: {
    item: IWorkout;
  };
};

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const statusAuth = useSelector<RootState, EStatusAuth>(
    state => state.auth.statusAuth,
  );

  const dispatch = useDispatch();

  const checkLogin = React.useCallback(async () => {
    const auth: IAuth | null = await getAuthAsync();
    if (auth) {
      //call api validate auth
      fetch(URL.ValidateToken, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Connect-Type': 'application/json',
        },
        body: JSON.stringify({
          token: auth.token,
        }),
      })
        .then(response => response.json())
        .then((json: {success: boolean; message: string}) => {
          console.log('json', json);
          const success = json.success;
          //token failed
          if (!success) {
            Alert.alert('Thong bao', json.message);
            dispatch(updateStatusAuth({statusAuth: EStatusAuth.unauth}));
            return;
          }
          //token success
          dispatch(onLogin(auth));
          return json;
        });
    } else {
      dispatch(updateStatusAuth({statusAuth: EStatusAuth.unauth}));
    }
  }, []);

  React.useEffect(() => {
    checkLogin();
  }, []);

  if (statusAuth === EStatusAuth.check)
    return (
      <View flex center>
        <ActivityIndicator color={Colors.primary} />
      </View>
    );
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* {statusAuth === EStatusAuth.unauth ? (
          <>
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Login" component={Login} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="MainTab"
              component={MainTab}
              options={{headerShown: false}}
            />
          </>
        )} */}
        {/* <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen name="DetailWorkout" component={DetailWorkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
