import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { theme } from "../../../../styles/theme";
import { MoreOptionsIcon } from "./more-options.style";
import { iconMode } from "../../../../styles/global.style";
type Props = {
  color?: string,
  size?: number,
  background: string
}
function MoreOptionsComponent(props: Props) {
  return (
    <MoreOptionsIcon
      type={theme.icons.type}
      name={iconMode.outline.ellipsisHorizontal}
      color={props.color || theme.colors.icon.black}
      background={props.background}
      size={props.size || 25} />
  );
}
export default MoreOptionsComponent;
