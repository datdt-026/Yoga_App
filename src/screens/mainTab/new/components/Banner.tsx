import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Carousel, Colors, Text, View, Image} from 'react-native-ui-lib';

const widthScreen = Dimensions.get('window').width;

const witdhCarousel = widthScreen - 32;
const heightCarousel = (widthScreen / 344) * 242;

const IMAGES = [
  'https://images.pexels.com/photos/2529159/pexels-photo-2529159.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/2529158/pexels-photo-2529158.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
];

const ItemBanner = ({image}: {image: string}) => {
  return (
    <View flex centerV>
      <Image
        overlayType={Image.overlayTypes.BOTTOM}
        style={{flex: 1}}
        source={{
          uri: image,
        }}
      />
    </View>
  );
};

const Banner = () => {
  return (
    <View
      marginH-16
      width={witdhCarousel}
      height={heightCarousel}
      backgroundColor="red"
      style={styles.container}>
      <Carousel
        //loop
        autoplay={true}
        pageWidth={witdhCarousel}
        containerStyle={{height: heightCarousel}}
        // showCounter
        loop
        pageControlProps={{
          size: 10,
          containerStyle: styles.loopCarousel,
          color: Colors.primary,
          inactiveColor: Colors.white,
        }}
        pageControlPosition={Carousel.pageControlPositions.OVER}>
        {IMAGES.map((image, i) => {
          return <ItemBanner key={i} image={image} />;
        })}
      </Carousel>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  loopCarousel: {
    position: 'absolute',
    bottom: 15,
    left: 10,
  },
  container: {
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: -heightCarousel / 2 - 32,
    width: witdhCarousel,
    height: heightCarousel,
    marginHorizontal: 16,
    marginBottom: 16,
  },
});
