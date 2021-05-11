import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import SlidesComponent from "../slides/slides.component";
import {
  DetailPageStyle, Seperate,
  TotalSoldCount,
} from "../../pages/detail-page/detail-page.style";
import {
  ProductPriceContainer,
  ProductRatingContainer,
  RatingComponent, SalePrice, TextSection,
  TotalRatingCount,
} from "../product/product.style";
import { FlexRow, PaddingText, PaddingView, Relative } from "../../../styles/global.style";
import SocialShareComponent from "../buttons/social-share/social-share.component";
import { useScroller } from "../../providers/scroll-context/scroll-context-provider";
import Axios from "axios-observable";
import { useActionHeader } from "../../providers/header-action/header-action.provider";
import BackButtonComponent from "../buttons/back-button/back-button.component";
import CartButtonComponent from "../buttons/cart-button/cart-button.component";
import MoreOptionsComponent from "../buttons/more-options/more-options.component";
import CurrencyComponent, { ColorTag, PercentageComponent, TextLabelComponent } from "../common/common.component";
import { theme } from "../../../styles/theme";
import LeftHeaderComponent from "../header/left-header/left-header.component";
import CenterHeaderComponent from "../header/center-header/center-header.component";
import RightHeaderComponent from "../header/right-header/right-header.component";
import { DetailHeader, SocialIconDetail, TitleHeader } from "./detail-content.style";
import { Text } from "react-native-elements";
import { BackgroundHeader } from "../header/header.style";
import HeaderComponent from "../header/header.component";
import FavoriteButton from "../buttons/favorite-button/favorite-button";

type Props = {
  route: any,
  navigation: any,
};

function DetailContent(props: Props) {
  const { dataItem, updateData } = useActionHeader();
  const { opacity, updateOffset } = useScroller();
  const [productDetail, setProductDetail] = useState({});
  const { item } = props.route.params;

  function getProductById() {
    Axios.get(`http://localhost:3000/products/${item.id}`)
      .subscribe((res: any) => {
        updateData(res.data);
        setProductDetail({ ...productDetail, ...res.data });
      }, error => {
        console.log(error);
      });
  }

  useEffect(() => {
    return getProductById();
  }, []);
  return (
    <>
      <HeaderComponent>
        <DetailHeader>
          <LeftHeaderComponent>
            <BackButtonComponent navigation={props.navigation} />
          </LeftHeaderComponent>
          <CenterHeaderComponent>
            <TitleHeader
              opacity={opacity}
              numberOfLines={1}
              theme={theme} h4>
              {dataItem.productName}
            </TitleHeader>
          </CenterHeaderComponent>
          <RightHeaderComponent>
            <SocialShareComponent
              background={theme.colors.bg.gray}
              color={theme.colors.icon.lightgray} />
            <CartButtonComponent
              background={theme.colors.bg.gray}
              color={theme.colors.icon.lightgray} />
            <MoreOptionsComponent
              background={theme.colors.bg.gray}
              color={theme.colors.icon.lightgray} />
          </RightHeaderComponent>
        </DetailHeader>
      </HeaderComponent>
      <DetailPageStyle.ScrollViewWrap
        scrollEventThrottle={5}
        onScroll={({ nativeEvent }) => {
          updateOffset(nativeEvent.contentOffset.y > 109 ? 109 : nativeEvent.contentOffset.y < 0 ? -0.11 : nativeEvent.contentOffset.y);
        }}>
        <SlidesComponent
          customStyle={DetailPageStyle.SlideCustomStyle}
          imageSource={[productDetail?.productImages]} />
        <PaddingView vertical={10}>
          <PaddingText horizontal={10}>{productDetail?.productName}</PaddingText>
          <PaddingView>
            <ProductRatingContainer>
              <CurrencyComponent size={18} value={productDetail.salePrice} />
              <CurrencyComponent
                size={16}
                color={theme.colors.ui.secondary}
                value={productDetail.originalPrice}
                textDecoration={"line-through"} />
            </ProductRatingContainer>
          </PaddingView>
          <ProductRatingContainer>
            <RatingComponent
              type="star"
              imageSize={13}
              readonly={true}
              startingValue={Number(productDetail?.averageRating || 0)}
            />
            <TotalRatingCount>{productDetail?.totalRatingCount}</TotalRatingCount>
            <Seperate>I</Seperate>
            <TotalSoldCount>710 Sold</TotalSoldCount>
            <FlexRow justifyContent={"flex-end"}>
              <TouchableOpacity>
                <SocialShareComponent size={20} background={theme.colors.bg.transparent} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FavoriteButton size={20} background={theme.colors.bg.transparent} />
              </TouchableOpacity>
            </FlexRow>
          </ProductRatingContainer>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </PaddingView>
      </DetailPageStyle.ScrollViewWrap>
    </>
  );
}

export default DetailContent;
