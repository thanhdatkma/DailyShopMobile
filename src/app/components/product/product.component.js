import React, { useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { ProductModel } from "./models/product.model";
import {
  ProductImage,
  ProductImageContainer,
  ProductItemWrap, ProductPriceContainer,
  ProductRatingContainer,
  ProductTitle, RatingComponent, TextSection, TotalRatingCount,
} from "./product.style";
import FavoriteButton from "../buttons/favorite-button/favorite-button";
import { theme } from "../../../styles/theme";
import { Absolute, FlexRow, PaddingText, PaddingView, Relative } from "../../../styles/global.style";
import CurrencyComponent, { ColorTag, PercentageComponent } from "../common/common.component";
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
      <PaddingView vertical={10} horizontal={10}>
        <PaddingView horizontal={5}>
          <ProductTitle numberOfLines={2} horizontal={5}>{props.productItem.productName}</ProductTitle>
        </PaddingView>
        <ProductRatingContainer>
          <RatingComponent
            type="star"
            imageSize={13}
            readonly={true}
            startingValue={Number(props.productItem.averageRating || 0)}
          />
          <TotalRatingCount>({props.productItem.totalRatingCount})</TotalRatingCount>
        </ProductRatingContainer>
        <Relative>
          <FlexRow>
            <CurrencyComponent
              size={15}
              value={props.productItem.salePrice} />
            <ColorTag theme={theme}>
              <PercentageComponent
                salePrice={props.productItem.salePrice}
                originalPrice={props.productItem.originalPrice} />
            </ColorTag>
            {/*<FavoriteWrap>*/}
            {/*  <FavoriteButton size={20} background={theme.colors.bg.transparent}/>*/}
            {/*</FavoriteWrap>*/}
          </FlexRow>
        </Relative>
      </PaddingView>
    </ProductItemWrap>
  );
}
