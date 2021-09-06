import React from 'react';
import {Dimensions, ScrollView, StyleSheet} from 'react-native';
import {View, Text, Colors, Image, Button} from 'react-native-ui-lib';

const witdh = Dimensions.get('window').width;

const dataFunc = [
  {
    assetName: 'account',
  },
  {
    assetName: 'abount',
  },
  {
    assetName: 'clearcache',
  },
  {
    assetName: 'language',
  },
  {
    assetName: 'noti',
  },
  {
    assetName: 'privacy',
  },
  {
    assetName: 'rate',
  },
];

interface IPageSetting {
  assetName: string;
}

const PageSetting = ({assetName}: IPageSetting) => {
  return (
    <View>
      <Image
        assetGroup="onboarding"
        assetName={assetName}
        resizeMode="contain"
      />
    </View>
  );
};

const Setting = () => {
  return (
    <View flex backgroundColor={Colors.white}>
      <ScrollView>
        {dataFunc.map((item, index) => {
          <PageSetting assetName={item.assetName} key={item.assetName} />;
        })}
      </ScrollView>
      <Button label="Log out" marginB-30 style={{width: witdh - 82}} />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({});
