import React, { useState } from "react";
import { PixelRatio, StyleSheet, View } from "react-native";
import { Image } from "react-native-elements";
type Props = {
  styles?: any,
  source?: any
}
export default function LeftHeaderComponent(props: Props) {
  const [styles, setStyles ] = useState(StyleSheet.create({
    logo: {
      width: 242 * 0.7,
      height: 52 * 0.7
    }
  }));
  return(
    <Image source={props.source}  containerStyle={styles.logo} />
  );
}
