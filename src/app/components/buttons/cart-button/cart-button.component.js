import React, { useState } from "react";
import { Badge, Icon } from "react-native-elements";
import { StyleSheet } from "react-native";
import { iconMode, Relative } from "../../../../styles/global.style";
import { theme } from "../../../../styles/theme";
import { BadgeIcon, CartIcon } from "./cart-button.style";

type Props = {
  color?: string,
  size?: number,
  background: string
}

export default function CartButtonComponent(props: Props) {
  return (
    <Relative>
      <CartIcon
        type={theme.icons.type}
        name={iconMode.outline.cart}
        color={props.color || theme.colors.icon.black}
        background={props.background}
        size={props.size || 25} />
      <BadgeIcon
        status="error"
        value="99+"
      />
    </Relative>
  );
}
