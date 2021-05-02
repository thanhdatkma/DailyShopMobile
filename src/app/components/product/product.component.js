import React, { useState } from "react";
import { Card, Icon, Image, Rating } from "react-native-elements";
import { ActivityIndicator, Text, View } from "react-native";
import { ProductModel } from "./models/product.model";
import { CommonHelper } from "../../helpers/common.helper";
import { CommonConstants } from "../../constants/common.constants";

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
    <View
      onLayout={onPageLayout}
      style={{
        height: "auto",
        width: new CommonHelper().checkTotalEvent(
          props.index,
          props.total,
          CommonConstants.Common.displayColGrid) ? "100%" : "50%",
        minHeight: 330,
        backgroundColor: "white",
        // justifyContent: "center",
        borderTopWidth: props.index === 0 || props.index === 1 ? 0.2 : 0,
        borderBottomWidth: 0.2,
        borderRightWidth: new CommonHelper().checkIndexIsEvent(props.index) ? 0.2 : 0,
      }}>
      <View style={{
        width: "100%",
        minHeight: 200,
        alignItems: "center",
        padding: 10,
      }}>
        <Image
          source={props.productItem.productImages ? { uri: props.productItem.productImages }
            : require("../../../assets/images/no-image.jpeg")}
          style={{
            width: imageSize.width - 16,
            height: "auto",
            minHeight: 200,
          }}
          PlaceholderContent={<ActivityIndicator size="small" color="#0000ff" />}
        />
      </View>
      <Text
        style={{
          padding: 10,
          minHeight: 50,
        }}>{props.productItem.productName}</Text>
      <View style={{
        flexDirection: "row",
        alignItems: "flex-start",
        // justifyContent: "center",
        position: "relative",
      }}>
        <Rating
          type="star"
          imageSize={13}
          readonly={true}
          startingValue={Number(props.productItem.averageRating)}
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}
        />
        <Text style={{
          fontSize: 13,
          color: "grey",
          paddingVertical: 5,
          paddingHorizontal: 5,
        }}>({props.productItem.totalRatingCount})</Text>
      </View>
      <View style={{
        flexDirection: "row",
        // position: "relative"
        paddingVertical: 5,
        paddingHorizontal: 10,
      }}>
        <Text style={{
          paddingRight: 10,
        }}>{props.productItem.salePrice}$</Text>
        <View style={{
          padding: 2,
          borderRadius: 3,
          backgroundColor: "red",
        }}>
          <Text style={{
            // padding: 1.5,
            fontSize: 10,
            color: "#ffffff",
          }}>
            -{Number(((props.productItem.originalPrice - props.productItem.salePrice) / props.productItem.originalPrice) * 100)
            .toFixed(0)}%</Text>
        </View>
      </View>
      {/*<View style={{*/}
      {/*  zIndex: 3,*/}
      {/*  position: "absolute",*/}
      {/*  top: 10,*/}
      {/*  right: 10*/}
      {/*}}>*/}
      {/*  <Icon*/}
      {/*    type={"ionicon"}*/}
      {/*    name={"heart"}*/}
      {/*    style={{*/}
      {/*      fontSize: 30*/}
      {/*    }}*/}
      {/*    color={"red"}*/}
      {/*    size={25} />*/}
      {/*</View>*/}
    </View>
  );
}
