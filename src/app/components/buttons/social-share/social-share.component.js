import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { SocialIcon } from "./social-share.style";
import { theme } from "../../../../styles/theme";
import { iconMode } from "../../../../styles/global.style";

type Props = {
  color?: string,
  size?: number,
  background: string
}
function SocialShareComponent(props: Props) {
  return (
    <SocialIcon
      type={theme.icons.type}
      name={iconMode.outline.shareSocial}
      background={props.background}
      color={props.color || theme.colors.icon.black}
      size={props.size || 25} />
  );
}
export default SocialShareComponent;
