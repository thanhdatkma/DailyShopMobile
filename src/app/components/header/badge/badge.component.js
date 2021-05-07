import React, { useEffect, useState } from "react";
import { Badge } from "react-native-elements";
import { StyleSheet } from "react-native";

type Props = {
  customStyle?: {}
}

export default function BadgeComponent(props: Props) {
  let defaultStyle = {
    badgeIcon: {
      position: 'absolute',
      top: -3,
      right: -3,
      width: 36
    }
  }
  if (props.customStyle) {
    defaultStyle.badgeIcon = Object.assign(defaultStyle.badgeIcon, props.customStyle);
  }
  const [styles, setStyles] = useState(StyleSheet.create(defaultStyle));
  return (
    <Badge
      status="error"
      value="99+"
      containerStyle={styles.badgeIcon}
    />
  );
}
