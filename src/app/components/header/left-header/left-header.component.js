import React, { useState } from "react";
import { AppLogo } from "./left-header.style";
type Props = {
  logo?: any,
}
export default function LeftHeaderComponent(props: Props) {
  return(
    <>
      { props.children ? props.children :  <AppLogo source={props.logo} />}
      {/*<AppLogo source={props.source} />*/}
    </>
  );
}
