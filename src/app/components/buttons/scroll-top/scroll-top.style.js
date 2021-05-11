import React from "react";
import { View } from "react-native"
import styled from "styled-components/native";
export const ScrollTopSection = styled(View)`
  background-color: ${(props) => props.theme.colors.icon.lightgray};
  width: 50px;
  height: 50px;
  border: 1px solid gray;
  border-radius: 50px;
  position: absolute;
  bottom: 50px;
  right: 20px;
  z-index: 5
`
