import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CartComponent from "../cart/cart.component";
import SearchComponent from "../search/search.component";
import BadgeComponent from "../badge/badge.component";

type Props = {}

export default function RightHeaderComponent({}: Props) {
  const [styles, setStyles] = useState(StyleSheet.create({
    rightIcon: {
      width: 50,
      height: 30,
      // backgroundColor: "powderblue"
    }
  }));
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={styles.rightIcon}>
        <SearchComponent />
      </View>
      <View style={styles.rightIcon}>
        <CartComponent />
        <BadgeComponent />
      </View>
    </View>
  );
}
