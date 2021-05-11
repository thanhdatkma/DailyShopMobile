import React from "react";
import styled from "styled-components/native";
import { Badge, Icon } from "react-native-elements";

export const CartIcon = styled(Icon)`
  border-radius: 50px;
  width: 30px;
  height: 30px;
  padding: 3px;
  margin: 0 5px;
  background-color: ${(props) => props.background};
`;

export  const BadgeIcon = styled(Badge).attrs({
  containerStyle: {
    position: 'absolute',
    top: -7,
    left: 20,
  },
  badgeStyle: {

  },
  textStyle: {
    fontSize: 10
  }
})``;
