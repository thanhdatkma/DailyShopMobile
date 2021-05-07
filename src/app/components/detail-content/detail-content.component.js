import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SlidesComponent from "../slides/slides.component";
import { DetailPageStyle } from "../../pages/detail-page/detail-page.style";
import TextLabelComponent from "../common/text-label.component";
import { RatingComponent } from "../product/product.style";
import { FlexWrap } from "../../../styles/global.style";
import SocialShareComponent from "../buttons/social-share/social-share.component";
import { useScroller } from "../../providers/scroll-context/scroll-context-provider";
import Axios from "axios-observable";
import HeaderComponent from "../header/header.component";
import HeaderActionContextProvider, { useActionHeader } from "../../providers/header-action/header-action.provider";
import BackButtonComponent from "../buttons/back-button/back-button.component";
import CartButtonComponent from "../buttons/cart-button/cart-button.component";
import BadgeComponent from "../header/badge/badge.component";
import MoreOptionsComponent from "../buttons/more-options/more-options.component";
type Props = {
  route: any,
  navigation: any,
};

function RightDetailHeader({route, navigation }) {
  let defaultStyle = {
    rightIcon: {
      // width: 50,
      borderRadius: 30,
      height: 30,
      // backgroundColor: "green",
      marginHorizontal: 5,
    },
    badgeIcon: {
      position: 'absolute',
      top: -8,
      right: -18,
      width: 36
    },
    cartIcon: {
      backgroundColor: '#66666773',
      color: 'lightgray'
    },
    moreOptions: {
      backgroundColor: '#66666773',
      color: 'lightgray'
    },
    socialIcon: {
      backgroundColor: '#66666773',
      color: 'lightgray'
    }
  }
  const [styles, setStyles] = useState(StyleSheet.create(defaultStyle));
  return(
    <View style={{ flex: 1, flexDirection: "row", paddingHorizontal: 0, paddingVertical: 0,}}>
      <View style={styles.rightIcon}>
        <SocialShareComponent customStyle={defaultStyle.socialIcon} />
      </View>
      <View style={styles.rightIcon}>
        <CartButtonComponent customStyle={defaultStyle.cartIcon} />
        <BadgeComponent customStyle={defaultStyle.badgeIcon} />
      </View>
      <View style={styles.rightIcon}>
        <MoreOptionsComponent customStyle={defaultStyle.moreOptions} />
      </View>
    </View>
  );
}
function DetailContent(props: Props) {
  const { opacity, updateOffset } = useScroller();
  const { dataItem, updateData } = useActionHeader();
  const [productDetail, setProductDetail] = useState({});
  const { item } = props.route.params;
  function getProductById() {
    Axios.get(`http://localhost:3000/products/${item.id}`)
      .subscribe((res: any) => {
        updateData(res.data);
        setProductDetail( {...productDetail, ...res.data});
      }, error => {
        console.log(error);
      });
  }

  useEffect(() => {
    return getProductById();
  },[]);
  return(
    <>
      <HeaderComponent
        headerCustomStyle={DetailPageStyle.CustomHeaderStyle}
        leftComponent={<BackButtonComponent  navigation={props.navigation}/>}
        rightComponent={<RightDetailHeader navigation={props.navigation} />}
        centerComponent={
          { text: dataItem.productName, style: {...DetailPageStyle.CustomRightHeaderStyle,
              ...{
                opacity: opacity
              }} }
        }
      />
      <DetailPageStyle.ScrollViewWrap
        scrollEventThrottle={5}
        onScroll={({ nativeEvent }) => {
          updateOffset(nativeEvent.contentOffset.y > 109 ? 109 : nativeEvent.contentOffset.y < 0 ? -0.11 : nativeEvent.contentOffset.y);
        }}
      >
        <SlidesComponent
          customStyle={DetailPageStyle.SlideCustomStyle}
          imageSource={[productDetail?.productImages]} />
        <TextLabelComponent>{productDetail?.productName}</TextLabelComponent>

        <DetailPageStyle.RatingWrap>
          <RatingComponent
            type="star"
            imageSize={14}
            readonly={true}
            startingValue={Number(productDetail?.averageRating || 0)}
          />
          <DetailPageStyle.TotalRatingCount>{productDetail?.totalRatingCount}</DetailPageStyle.TotalRatingCount>
          <DetailPageStyle.Seperate>I</DetailPageStyle.Seperate>
          <DetailPageStyle.TotalSoldCount>710 Sold</DetailPageStyle.TotalSoldCount>
          <FlexWrap>
            <TouchableOpacity>
              <SocialShareComponent customStyle={{
                marginHorizontal: 5,
              }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <DetailPageStyle.FavoriteIconDetail
                type={"ionicon"}
                name={"heart"}
                color={"red"}
                size={25} />
            </TouchableOpacity>
          </FlexWrap>
        </DetailPageStyle.RatingWrap>
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

      </DetailPageStyle.ScrollViewWrap>
    </>
  );
}

export default DetailContent;
