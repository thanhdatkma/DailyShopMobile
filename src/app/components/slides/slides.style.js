import React from "react";
import styled from "styled-components/native";
import { SliderBox } from "react-native-image-slider-box";
import { Absolute } from "../../../styles/global.style";
import { Text } from "react-native-elements";
export const SliderBoxComponent = styled(SliderBox)
export const SliderCountWrap = styled(Absolute)`
  z-index: 2;
  elevation: 0;
  bottom: 10px;
  right: 10px;
  padding: 3px 10px;
  border-radius: 16px;
  background-color: rgba(169, 168, 168, 0.6);
`;

export const SliderCount = styled(Text)`
  color: ${(props) => props.theme.colors.ui.quaternary}
`;
