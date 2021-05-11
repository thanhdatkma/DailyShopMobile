import React from "react";
import styled from "styled-components/native";
import { Icon } from "react-native-elements";

export const SearchIcon = styled(Icon)`
    width: 30px;
    height: 30px;
    background-color: ${(props) => props.background};
`;
