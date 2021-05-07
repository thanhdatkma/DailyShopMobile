import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

type Props = {
  customStyle: {}
}
function SocialShareComponent(props: Props) {
  let defaultStyle = {
    socialIcon: {
      borderRadius: 50,
      width: 30,
      height: 30,
      paddingHorizontal: 3,
      backgroundColor: "transparent",
      color: "black"
    }
  }
  if (props.customStyle) {
    defaultStyle.socialIcon = Object.assign(defaultStyle.socialIcon, props.customStyle);
  }
  const [styles, setStyles] = useState(StyleSheet.create(defaultStyle));
  return (
    <Icon
      type={"ionicon"}
      name={"share-social-outline"}
      style={styles.socialIcon}
      color={styles.socialIcon.color}
      size={25} />
  );
}
export default SocialShareComponent;
