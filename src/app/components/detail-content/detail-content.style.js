import React from "react";
import styled from "styled-components/native";
import { AppHeader } from "../header/header.style";
import { SocialIcon } from "../buttons/social-share/social-share.style";
import { Text } from "react-native-elements";

export const DetailHeader = styled(AppHeader).attrs({
  centerContainerStyle: {
    flex: 3,
  },
  leftContainerStyle: {
    flex: 0,
  },
  rightContainerStyle: {
    flex: 1.8,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative"
  },
})``;

export const TitleHeader = styled(Text)`
  padding: 0 10px;
  opacity: ${props => props.opacity};
`;

export const SocialIconDetail = styled(SocialIcon).attrs({
  style: {
    backgroundColor: props => props.theme.colors.bg.gray,
    color: props => props.theme.colors.icon.lightgray
  }
})``;
