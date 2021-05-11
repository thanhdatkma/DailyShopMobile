import React, { useContext, useState } from "react";
import { SearchIcon } from "./search-icon.style";
import { theme } from "../../../../styles/theme";
import { iconMode } from "../../../../styles/global.style";

type Props = {
  color?: string,
  size?: number,
  background: string
}

export default function SearchIconComponent(props: Props) {
  return (
    <SearchIcon
      type={theme.icons.type}
      name={iconMode.outline.search}
      color={props.color || theme.colors.icon.black}
      background={props.background}
      size={25}/>
  );
}
