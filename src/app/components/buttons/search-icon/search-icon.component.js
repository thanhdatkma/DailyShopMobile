import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

type Props = {}

export default function SearchIconComponent({}: Props) {
  const [styles, setStyles] = useState(StyleSheet.create({
    searchIcon: {
      width: 50,
      height: 30,
      // backgroundColor: "powderblue"
    }
  }));
  // @ts-ignore
  return (
    <Icon
      type={"ionicon"}
      name={"search-outline"}
      style={styles.searchIcon}
      size={25}/>
  );
}
