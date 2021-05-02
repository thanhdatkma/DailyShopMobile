import React, { useEffect, useState } from "react";
import { Header } from "react-native-elements";
import { HeaderIconModel } from "../../models/header-icon.model";
import { Animated } from "react-native";
import LeftHeaderComponent from "./left-header/left-header.component";
import { useScroller } from "../../providers/scroll-context/scroll-context-provider";
import RightHeaderComponent from "./right-header/right-header.component";
import type { TextProps } from "react-native/Libraries/Text/TextProps";
type Props = {
  headerCustomStyle?: { },
  leftComponent?: React.ReactElement<{}> | TextProps | HeaderIconModel;
  rightComponent?: React.ReactElement<{}> | TextProps | HeaderIconModel;
  centerComponent?: React.ReactElement<{}> | TextProps | HeaderIconModel;
}
function HeaderComponent(props: Props) {
  const { opacity } = useScroller();
  let defaultHeaderStyle = {
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
  };
  let [headerStyle, setDefaultHeaderStyle] = useState(defaultHeaderStyle);
  if (props.headerCustomStyle) {
    defaultHeaderStyle = Object.assign(defaultHeaderStyle, props.headerCustomStyle);
    setDefaultHeaderStyle(defaultHeaderStyle);
  }
  const [titleFade] = useState(
    new Animated.Value(0)
  );
  function checkHideHeader(opacity: number) {
    if (opacity < 0) {
      defaultHeaderStyle = Object.assign(defaultHeaderStyle, {opacity: 0});
    } else {
      defaultHeaderStyle = Object.assign(defaultHeaderStyle, {opacity: 1});
    }
    setDefaultHeaderStyle(defaultHeaderStyle);
  }
  useEffect(() => {
    checkHideHeader(opacity);
  }, [opacity]);
  return (
    <>
      <Header
        statusBarProps={{ barStyle: "light-content" }}
        barStyle="light-content"
        leftComponent={props.leftComponent ? props.leftComponent
          : <LeftHeaderComponent source={require("../../../assets/images/logo.png")} />}
        rightComponent={props.rightComponent ? props.rightComponent : <RightHeaderComponent />}
        centerComponent={props.centerComponent ? props : ""}
        containerStyle={headerStyle}/>
      <Animated.View style={{
        backgroundColor: "#ffffff",
        width: '100%',
        height: 90,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        opacity: opacity,
        elevation: 0,
        padding:20,
        borderBottomWidth: 0,
        shadowColor: "#000000",
        shadowOpacity: 0.7,
        shadowRadius: 4,
        shadowOffset: {
          height: 1,
          width: 1
        }
      }}>
      </Animated.View>
    </>
  );
}
export default HeaderComponent;
