import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { StyleSheet } from "react-native";

type Props = {
  customStyle?: {}
}

export default function CartButtonComponent(props: Props) {
  let defaultStyle = {
    cartIcon: {
      borderRadius: 50,
      width: 30,
      height: 30,
      padding: 3,
      backgroundColor: "transparent",
      color: 'black'
    }
  }
  if (props.customStyle) {
    defaultStyle.badgeIcon = Object.assign(defaultStyle.cartIcon, props.customStyle);
  }
  const [styles, setStyles] = useState(StyleSheet.create(defaultStyle));
  return (
    <Icon
      type={"ionicon"}
      name={"cart-outline"}
      style={styles.cartIcon}
      color={styles.cartIcon.color}
      size={25} />
  );
}
