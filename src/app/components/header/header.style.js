import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Header } from "react-native-elements";
export const BackgroundHeader = styled(View).attrs({
  style: {
    shadowColor: "#000000",
    shadowOpacity: 0.7,
    shadowRadius: 4,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  }
})`
  background-color: ${(props) => props.theme.colors.bg.primary};
  width: 100%;
  height: 90px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: ${(props) => props.opacity};
  elevation: 0;
  padding: ${(props) => props.theme.space[3]};
  border-bottom-width: 0px;
`;

export const AppHeader = styled(Header).attrs({
  containerStyle: {
      backgroundColor: "transparent",
      justifyContent: "space-around",
      height: 90,
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 2,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
      paddingHorizontal: 5,
      paddingVertical: 0
  },
  centerContainerStyle: {
    flex: 0
  },
  leftContainerStyle: {
    flex: 2
  },
  rightContainerStyle: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "relative",
    paddingRight: 16
  }
})``;
