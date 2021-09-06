import React from 'react';
import {StyleSheet, ScrollView, Dimensions} from 'react-native';
import {View, Text, Colors, Image, Button} from 'react-native-ui-lib';

const witdh = Dimensions.get('window').width;

const dataOnboarding = [
  {
    assetName: 'onboarding1',
    title: 'Your Yoga',
    des: 'Does Hydrogerm Work',
  },
  {
    assetName: 'onboarding2',
    title: 'Your Healthy',
    des: 'Recommended You To Use After Before\nBreast Enhancement',
  },
  {
    assetName: 'onboarding3',
    title: 'Learning to Relax',
    des: 'The Health Benefits Of Sunglasses',
  },
];

interface IPageOnboarding {
  assetName: string;
  title: string;
  des: string;
  onPress: () => void;
}

const PageOnboarding = ({assetName, title, des, onPress}: IPageOnboarding) => {
  return (
    <View style={{width: witdh, height: '100%', backgroundColor: '#FFF'}}>
      <Image
        assetGroup="onboarding"
        assetName={assetName}
        style={{width: witdh, height: (witdh / 375) * 464}}
        resizeMode="contain"
      />
      <View flex bottom centerH>
        <Text h30 marginB-10>
          {title}
        </Text>
        <Text b17 color={Colors.dark10} marginB-36 center>
          {des}
        </Text>
        <Button
          label="CREATE ACCOUNT"
          marginB-30
          style={{width: witdh - 82}}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

interface IRefDots {
  setIndexPageForcus: React.Dispatch<React.SetStateAction<number>>;
}

const Dots = React.forwardRef<IRefDots>((props, ref) => {
  const [indexPageForcus, setIndexPageForcus] = React.useState<number>(0);

  React.useImperativeHandle(ref, () => {
    return {
      setIndexPageForcus,
    };
  });

  const renderDots = React.useCallback(() => {
    let views = [];
    let length = dataOnboarding.length;
    for (let i = 0; i < length; i++) {
      views.push(
        <View
          backgroundColor={
            indexPageForcus === i ? Colors.primary : Colors.dark40
          }
          style={styles.dot}
          key={i}
        />,
      );
    }
    return views;
  }, [indexPageForcus]);
  return <View style={styles.containerDots}>{renderDots()}</View>;
});

const Onboarding = () => {
  const refDots = React.useRef<IRefDots>(null);
  const refScrollView = React.useRef<ScrollView>(null);
  const onMomentumScrollEnd = React.useCallback(({nativeEvent}) => {
    const x = nativeEvent.contentOffset.x;
    let indexForcus = Math.round(x / witdh);
    refDots.current?.setIndexPageForcus(indexForcus);
  }, []);
  return (
    <View flex backgroundColor={Colors.white}>
      <ScrollView
        horizontal
        pagingEnabled
        onMomentumScrollEnd={onMomentumScrollEnd}
        showsHorizontalScrollIndicator={false}
        ref={refScrollView}>
        {dataOnboarding.map((item, index) => (
          <PageOnboarding
            assetName={item.assetName}
            title={item.title}
            des={item.des}
            key={item.assetName}
            onPress={() => {
              if (index === 2) return;
              refScrollView.current?.scrollTo({
                x: (index + 1) * witdh,
                y: 0,
                animated: true,
              });
              refDots.current?.setIndexPageForcus(index + 1);
            }}
          />
        ))}
      </ScrollView>
      <Dots ref={refDots} />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  containerDots: {
    position: 'absolute',
    top: (witdh / 375) * 464,
    height: 10,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  dot: {borderRadius: 5, marginHorizontal: 5, width: 10, height: 10},
});
