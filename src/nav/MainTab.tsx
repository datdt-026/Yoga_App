import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import New from '../screens/mainTab/new';
import Training from '../screens/mainTab/training';
import HealthTip from '../screens/mainTab/healthTip';
import Goals from '../screens/mainTab/goals';
import Profile from '../screens/mainTab/profile';
import {Image, Colors, View, Button, Assets} from 'react-native-ui-lib';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {Header} from '@react-navigation/elements';
import {FONTS} from '../config/Typo';

export type MainTabParamList = {
  New: undefined;
  Training: undefined;
  HealthTips: undefined;
  Goals: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.dark50,
      }}>
      <Tab.Screen
        name="New"
        component={New}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image assetGroup="iconTab" assetName="ic_new" tintColor={color} />
          ),
          tabBarLabel: 'New',
          headerTintColor: Colors.white,
          headerTransparent: true,
          header: (props: BottomTabHeaderProps) => (
            <Header
              title="Exercises"
              headerTitleStyle={{
                fontSize: 27,
                fontFamily: FONTS.Heavy,
              }}
              headerTitleAlign="left"
              headerRight={({tintColor, pressColor, pressOpacity}) => {
                return (
                  <View row>
                    <Button
                      iconSource={Assets.iconHeader.ic_search}
                      style={{width: 44, height: 44}}
                      link
                      color={Colors.white}
                    />
                    <Button
                      iconSource={Assets.iconHeader.ic_option}
                      style={{width: 44, height: 44}}
                      link
                      color={Colors.white}
                    />
                  </View>
                );
              }}
              headerStyle={{
                backgroundColor: Colors.transparent,
              }}
              headerTintColor={Colors.white}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Training"
        component={Training}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image assetGroup="iconTab" assetName="ic_play" tintColor={color} />
          ),
          tabBarLabel: 'Training',
        }}
      />
      <Tab.Screen
        name="HealthTip"
        component={HealthTip}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image
              assetGroup="iconTab"
              assetName="ic_healthTip"
              tintColor={color}
            />
          ),
          tabBarLabel: 'Health Tips',
        }}
      />
      <Tab.Screen
        name="Goals"
        component={Goals}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image assetGroup="iconTab" assetName="ic_goal" tintColor={color} />
          ),
          tabBarLabel: 'Goals',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image
              assetGroup="iconTab"
              assetName="ic_profile"
              tintColor={color}
            />
          ),
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
