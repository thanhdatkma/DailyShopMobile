import React from "react";
import styled from "styled-components/native/dist/styled-components.native.esm";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { AppSettings } from "../../../assets/settings/app.settings";
import { TextSection } from "../product/product.style";

/*
*  Const Component
*
* */
export const CardViewComponent = styled(View)`
  padding: ${(props) => props.theme.space[3]}
`;

export const TextLabelComponent = styled(Text)`
  padding: 10px;
  min-height: 20px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.bg.primary}
`;
export const ColorTag = styled(View)`
  padding: 3px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.bg.red};
  justify-content: center;
`;

/*
* Common Function Component
*
* */
export default function CurrencyComponent(props) {
  const Price = styled.Text`
    font-size: ${props.size || 12}px;
    padding-right: 10px;
    color: ${props.color || 'black'};
    text-decoration: ${props.textDecoration || 'none'};
    justify-content: center;
  `;
  const priceValue = new Intl.NumberFormat(AppSettings.DEFAULT_LOCATION,
    { style: 'currency', currency: AppSettings.DEFAULT_CURRENCY }).format(props.value)
    return(
      <Price>{priceValue}</Price>
    );
}

export function PercentageComponent(props) {
  let beforeValue = props.originalPrice;
  let afterValue = props.salePrice;
  const percent = new Intl.NumberFormat(AppSettings.DEFAULT_LOCATION,
  { style: 'percent',maximumSignificantDigits: 3 }).format((beforeValue - afterValue) / beforeValue);
  return(
    <>
      {props.children ? props.children : <TextSection>-{percent}</TextSection>}
    </>
  );
}

