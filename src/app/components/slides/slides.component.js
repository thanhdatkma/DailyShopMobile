import React from 'react';
import { StyleSheet, View } from "react-native";
import { SliderBox } from 'react-native-image-slider-box';
type Props = {
  imageSource?: string[],
  customStyle?: any,
  autoplay?: boolean,
  circleLoop?: boolean,
  autoplayInterval?: number,
  navigation: any,
}

export default function SlidesComponent(props: Props) {
  const defaultSlide = [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree"
  ]
  return (
    <SliderBox
      // paginationBoxVerticalPadding={20}
      dotColor="#FFEE58"
      inactiveDotColor="#90A4AE"
      autoplay={props.circleLoop}
      autoplayInterval={props.autoplayInterval}
      circleLoop={props.circleLoop}
      ImageComponentStyle={props.customStyle}
      onCurrentImagePressed={(index: number) => props.navigation.navigate('Detail')}
      currentImageEmitter={(index: number) => console.warn(`current pos is: ${index}`)}
      images={props.imageSource ? props.imageSource : defaultSlide} />
  );
}
