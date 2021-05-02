import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { StyleSheet } from "react-native";

type Props = {}

export default function CartComponent({}: Props) {
  const [styles, setStyles] = useState(StyleSheet.create({
    cartIcon: {
      borderRadius: 50,
      width: 30,
      height: 30,
      // paddingTop: 3,
      // backgroundColor: "lightgrey"
    }
  }));
  return (
    <Icon
      type={"ionicon"}
      name={"cart-outline"}
      style={styles.cartIcon}
      size={25} />
  );
}
