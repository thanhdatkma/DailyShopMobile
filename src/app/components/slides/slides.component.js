import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { SliderBox } from 'react-native-image-slider-box';
import { Relative } from "../../../styles/global.style";
import { SliderCount, SliderCountWrap } from "./slides.style";
import { theme } from "../../../styles/theme";
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
    <Relative>
      <SliderBox
        dotColor="#FFEE58"
        paginationBoxStyle={props.hidePaginationBox ? {display: 'none'} : {display: 'flex'}}
        inactiveDotColor="#90A4AE"
        autoplay={props.autoplay}
        autoplayInterval={props.autoplayInterval}
        circleLoop={props.circleLoop ? props.circleLoop : true}
        ImageComponentStyle={props.customStyle}
        onCurrentImagePressed={(index: number) => props.navigation.navigate('Detail')}
        currentImageEmitter={(index: number) => setCurrentIndex(index + 1)}
        images={props.imageSource ? props.imageSource : defaultSlide} />
      <SliderCountWrap>
        <SliderCount>{currentIndex}/{props.imageSource ? props.imageSource.length : defaultSlide.length}</SliderCount>
      </SliderCountWrap>
      {props.children}
    </Relative>
  );
}
