import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

type Props = {
  customStyle: {}
}
function MoreOptionsComponent(props: Props) {
  let defaultStyle = {
    moreOptions: {
      borderRadius: 50,
      width: 30,
      height: 30,
      padding: 3,
      backgroundColor: "transparent",
      color: "black"
    }
  }
  if (props.customStyle) {
    defaultStyle.moreOptions = Object.assign(defaultStyle.moreOptions, props.customStyle);
  }
  const [styles, setStyles] = useState(StyleSheet.create(defaultStyle));
  return (
    <Icon
      type={"ionicon"}
      name={"ellipsis-horizontal-outline"}
      style={styles.moreOptions}
      color={styles.moreOptions.color}
      size={25} />
  );
}
export default MoreOptionsComponent;
