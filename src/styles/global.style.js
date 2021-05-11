import React from "react";
import {Platform} from 'react-native';
import styled from "styled-components/native"
import { theme } from "./theme";
export const iconMode = Platform.OS === "android" ? theme.icons.android : theme.icons.ios;
export const WrapContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme && props.theme.colors.bg.primary};
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-bottom: ${Platform.OS === 'android' ? 20 : -33}px;
`;

export const FlexRow = styled.View`
  flex: ${(props) => props.flex || 1};
  flex-direction: row;
  ${(props) => props.justifyContent && `justify-content: ${props.justifyContent} `};
    
`;
export const FlexCol = styled.View`
  flex: 1;
  flex-direction: column
`;

export const Relative = styled.View`
  position: relative;
`;

export const Absolute = styled.View`
  position: absolute;
`;
export const PaddingView = styled.View`
    padding: ${(props) => props.horizontal || 0}px ${(props) => props.vertical || 0}px;
`;
export const PaddingText = styled.Text`
    padding: ${(props) => props.horizontal || 0}px ${(props) => props.vertical || 0}px;
`;

