import React from "react";
import styled from "styled-components/native";
import { Icon } from "react-native-elements";

export const SocialIcon = styled(Icon)`
  border-radius: 50px;
  width: 30px;
  height: 30px;
  padding: 3px;
  margin: 0 5px;
  background-color: ${(props) => props.background};
`;
