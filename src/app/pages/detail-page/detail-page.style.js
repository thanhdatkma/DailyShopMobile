import React from "react";
import styled from "styled-components/native";
import { Icon } from "react-native-elements";
import { ProductRatingContainer, TotalRatingCount } from "../../components/product/product.style";
export const DetailPageStyle = {
  CustomRightHeaderStyle: {
    // color: '#000000',
    paddingVertical: 6,
    // width: '100%',
    // left: -20,
    // paddingRight: 25,
    fontSize: 20,
  },
  CustomHeaderStyle: {
    backgroundColor: "transparent"
  },

  ScrollViewWrap: styled.ScrollView`
    background-color: #FFFFFF;
  `,
  SlideCustomStyle: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1,
  },
}
export const TotalSoldCount = styled(TotalRatingCount)``;
export const Seperate = styled(TotalRatingCount)``;
