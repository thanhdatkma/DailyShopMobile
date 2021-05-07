import React from "react";
import { FavoriteIconWrap } from "./favorite-button.style";
import {Icon } from "react-native-elements";

function FavoriteButton() {
  return(
    <FavoriteIconWrap>
      <Icon
        type={"ionicon"}
        name={"heart"}
        style={{
          fontSize: 30,
        }}
        color={"red"}
        size={25} />
    </FavoriteIconWrap>
  );
}
export default FavoriteButton;
