import React from "react";
import { FavoriteIcon, FavoriteIconWrap } from "./favorite-button.style";
import {Icon } from "react-native-elements";
import { theme } from "../../../../styles/theme";
import { iconMode } from "../../../../styles/global.style";
import { SocialIcon } from "../social-share/social-share.style";
type Props = {
  color?: string,
  size?: number,
  background: string
}
function FavoriteButton(props: Props) {
  return(
    <FavoriteIcon
      type={theme.icons.type}
      name={iconMode.outline.heart}
      background={props.background}
      color={props.color || theme.colors.icon.black}
      size={props.size || 25} />
  );
}
export default FavoriteButton;
