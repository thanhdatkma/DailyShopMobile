import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CartButtonComponent from "../../buttons/cart-button/cart-button.component";
import SearchIconComponent from "../../buttons/search-icon/search-icon.component";
import BadgeComponent from "../badge/badge.component";
import { RightHeaderStyle } from "./right-header.style";

type Props = {}

export default function RightHeaderComponent({}: Props) {
  const [styles, setStyles] = useState(RightHeaderStyle);
  return (
    <View style={styles.wrap}>
      <View style={styles.rightIcon}>
        <SearchIconComponent />
      </View>
      <View style={styles.rightIcon}>
        <CartButtonComponent />
        <BadgeComponent />
      </View>
    </View>
  );
}


