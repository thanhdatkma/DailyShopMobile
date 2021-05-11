import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Header } from "react-native-elements";
import { HeaderIconModel } from "../../models/header-icon.model";
import LeftHeaderComponent from "./left-header/left-header.component";
import { useScroller } from "../../providers/scroll-context/scroll-context-provider";
import RightHeaderComponent from "./right-header/right-header.component";
import type { TextProps } from "react-native/Libraries/Text/TextProps";
import { AppHeader, BackgroundHeader } from "./header.style";
import { Text } from "react-native";
import CenterHeaderComponent from "./center-header/center-header.component";
import { FlexRow } from "../../../styles/global.style";
import { RightHeaderIconWrap } from "./right-header/right-header.style";
import SearchIconComponent from "../buttons/search-icon/search-icon.component";
import CartButtonComponent from "../buttons/cart-button/cart-button.component";
import { theme } from "../../../styles/theme";

type Props = {
  headerCustomStyle?: {},
  leftComponent?: React.ReactElement<{}> | TextProps | HeaderIconModel;
  rightComponent?: React.ReactElement<{}> | TextProps | HeaderIconModel;
  centerComponent?: React.ReactElement<{}> | TextProps | HeaderIconModel;
  statusBarStyle?: {}
}

function HeaderComponent(props: Props) {
  const { opacity } = useScroller();
  return (
    <>
      {props.children ? <>{ props.children }</> :
        <AppHeader>
          <LeftHeaderComponent logo={require("../../../assets/images/logo.png")} />
          <CenterHeaderComponent />
          <RightHeaderComponent>
            <SearchIconComponent background={theme.colors.bg.transparent} />
            <CartButtonComponent background={theme.colors.bg.transparent} />
          </RightHeaderComponent>
        </AppHeader>
      }
      <BackgroundHeader
        style={styles.container}
        opacity={opacity}>
      </BackgroundHeader>
    </>
  );
}
export default HeaderComponent;
const styles = StyleSheet.create({
  container: {
    shadowColor: "#000000",
    shadowOpacity: 0.7,
    shadowRadius: 4,
    shadowOffset: {
      height: 1,
      width: 1,
    }
  },
});
