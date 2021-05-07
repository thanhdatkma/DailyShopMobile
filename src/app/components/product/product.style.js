import React from "react";
import View from "react-native";
import styled from "styled-components/native";
import { Image, Rating } from "react-native-elements";
import { CommonHelper } from "../../helpers/common.helper";
import { CommonConstants } from "../../constants/common.constants";
export const ProductImage = styled(Image)`
    height: auto;
    min-height: 200px;
    ${(props) => props.imageSize && `width: ${props.imageSize.width - 16}px`};
  `;
 export const ProductItemWrap = styled.View`
   height: auto;
   width: ${(props) => new CommonHelper().checkTotalEvent(
           props.index,
           props.total,
           CommonConstants.Common.displayColGrid) ? 100 : 50}%;
   min-height: 330px;
   background-color: white;
   border-top-width: ${(props) => ( props.index === 0 || props.index === 1) ? 0.2 : 0}px;
   border-bottom-width: 0.2px;
   border-right-width: ${(props) => new CommonHelper().checkIndexIsEvent(props.index) ? 0.2 : 0}px;
 `;
export const ProductImageContainer = styled.View`
    width: 100%;
    min-height: 200px;
    align-items: center;
    padding: 10px;
  `;
export const ProductTitle = styled.Text`
    padding: 10px;
    min-height: 50px;
  `;

export const  ProductRatingContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  position: relative;
`;
export const RatingComponent = styled(Rating)`
  padding: 5px 10px;
`;
export const TotalRatingCount = styled.Text`
  font-size: 13px;
  color: grey;
  padding: 5px;
`;
export const ProductPriceContainer = styled.View`
  flex-direction: row;
  padding: 5px 10px;
`;

export const SalePrice = styled.Text`
  padding-right: 10px;
`;
export const TextSection = styled.Text`
  font-size: 10px;
  color: #ffffff;
`;
export const DiscountPercent = styled.View`
  padding: 2px;
  border-radius: 3px;
  background-color: red;
`;
