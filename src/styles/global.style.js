import React from "react";
import {Platform, StyleSheet} from 'react-native';
import styled from "styled-components/native"
export const WrapContainer = styled.View`
  flex: 1;
  background-color: #dedede;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-bottom: ${Platform.OS === 'android' ? 20 : -33}px;
`;

export const FlexWrap = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 0 10px;
  justify-content: flex-end;
`;
