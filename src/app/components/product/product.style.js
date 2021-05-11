import React from "react";
import styled from "styled-components/native";
import { Image, Rating } from "react-native-elements";
import { CommonHelper } from "../../helpers/common.helper";
import { CommonConstants } from "../../constants/common.constants";
import { Absolute } from "../../../styles/global.style";

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
  border-top-width: ${(props) => (props.index === 0 || props.index === 1) ? 0.2 : 0}px;
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
  min-height: 30px;
`;
export const ProductRatingContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  position: relative;
`;
export const RatingComponent = styled(Rating)`
  padding: 5px 0px`;
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
  ${props => props.size && `font-size: ${props.size || 12}px`};
  padding-right: 10px;
`;
export const OriginalPrice = styled.Text`
  ${props => props.size && `font-size: ${props.size || 12}px`};
  padding-right: 10px;
  color: ${(props) => props.theme.colors.ui.secondary};
  text-decoration: line-through;
`;
export const TextSection = styled.Text`
  font-size: 10px;
  color: ${(props) => props.theme.colors.ui.quaternary};
`;
export const FavoriteWrap = styled(Absolute)`
  right: 0;
`;
