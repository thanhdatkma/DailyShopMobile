import React, { useState } from "react";
import { Badge } from "react-native-elements";
import { StyleSheet } from "react-native";

type Props = {}

export default function BadgeComponent({}: Props) {
  const [styles, setStyles] = useState(StyleSheet.create({
    badgeIcon: {
      position: 'absolute',
      top: -4,
      right: -4,
      width: 36

    }
  }));
  return (
    <Badge
      status="error"
      value="99+"
      containerStyle={styles.badgeIcon}
    />
  );
}
