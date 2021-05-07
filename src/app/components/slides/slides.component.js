import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SliderBox } from 'react-native-image-slider-box';
type Props = {
  imageSource?: string[],
  customStyle?: any,
  autoplay?: boolean,
  circleLoop?: boolean,
  autoplayInterval?: number,
  navigation?: any,
  paginationBoxStyle?: any,
  hidePaginationBox?: boolean,
}

export default function SlidesComponent(props: Props) {
  const [currentIndex, setCurrentIndex] = useState(1)
  const defaultSlide = [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree"
  ]
  return (
    <View style={{
      position:'relative'
    }}>
      <SliderBox
        dotColor="#FFEE58"
        paginationBoxStyle={props.hidePaginationBox ? {display: 'none'} : {display: 'flex'}}
        inactiveDotColor="#90A4AE"
        autoplay={props.circleLoop}
        autoplayInterval={props.autoplayInterval}
        circleLoop={props.circleLoop ? props.circleLoop : true}
        ImageComponentStyle={props.customStyle}
        onCurrentImagePressed={(index: number) => props.navigation.navigate('Detail')}
        currentImageEmitter={(index: number) => setCurrentIndex(index + 1)}
        images={props.imageSource ? props.imageSource : defaultSlide} />
      <View style={{
        position: 'absolute',
        zIndex: 2,
        elevation: 0,
        bottom: 10,
        right: 10,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 16,
        backgroundColor: 'rgba(124, 124, 124, 0.8)'
      }}>
        <Text style={{
          color: '#ffff'
        }}>{currentIndex}/{props.imageSource ? props.imageSource.length : defaultSlide.length}</Text>
      </View>
      {props.children}
    </View>
  );
}
