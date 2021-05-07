import React, { useState } from "react";
import { Card, Icon, Image, Rating } from "react-native-elements";
import { ActivityIndicator, Text, View } from "react-native";
import { ProductModel } from "./models/product.model";
import { CommonHelper } from "../../helpers/common.helper";
import { CommonConstants } from "../../constants/common.constants";
import styled from "styled-components/native";
import {
  DiscountPercent,
  ProductImage,
  ProductImageContainer,
  ProductItemWrap, ProductPriceContainer,
  ProductRatingContainer,
  ProductTitle, RatingComponent, SalePrice, TextSection, TotalRatingCount,
} from "./product.style";
import FavoriteButton from "../buttons/favorite-button/favorite-button";
type Props = {
  index: number;
  total: number;
  productItem: ProductModel;
};
export default function ProductComponent(props: Props) {
  const [imageSize, setImageSize] = useState({
    width: 100,
    height: 100,
  });
  const onPageLayout = (event: any) => {
    const { width, height } = event.nativeEvent.layout;
    return setImageSize({ width, height });
  };
  let [loading, setLoading] = useState(true);
  return (
    <ProductItemWrap
    onLayout={onPageLayout}
    index={props.index}
    total={props.total}
    >
      <ProductImageContainer>
        <ProductImage
          imageSize={imageSize}
          source={props.productItem.productImages ? { uri: props.productItem.productImages }
            : require("../../../assets/images/no-image.jpeg")}
          PlaceholderContent={<ActivityIndicator size="small" color="#0000ff" />}
        />
      </ProductImageContainer>
      <ProductTitle>{props.productItem.productName}</ProductTitle>
      <ProductRatingContainer>
        <RatingComponent
          type="star"
          imageSize={13}
          readonly={true}
          startingValue={Number(props.productItem.averageRating || 0)}
        />
        <TotalRatingCount>({props.productItem.totalRatingCount})</TotalRatingCount>
      </ProductRatingContainer>
      <ProductPriceContainer>
        <SalePrice>{props.productItem.salePrice}$</SalePrice>
        <DiscountPercent>
          <TextSection>
            -{Number(((props.productItem.originalPrice - props.productItem.salePrice) / props.productItem.originalPrice) * 100)
            .toFixed(0)}%</TextSection>
        </DiscountPercent>
      </ProductPriceContainer>
      <FavoriteButton />
    </ProductItemWrap>
  );
}
