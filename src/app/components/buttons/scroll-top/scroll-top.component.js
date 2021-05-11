import React, { useState } from "react";
import { Platform, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableOpacityComponent } from "react-native";
import { Icon } from "react-native-elements";
import { ScrollTopSection } from "./scroll-top.style";
import { theme } from "../../../../styles/theme";
import { iconMode } from "../../../../styles/global.style";

function ScrollTopComponent() {
  return (
    <TouchableOpacity>
      <ScrollTopSection>
        <Icon
          type={theme.icons.type}
          name={iconMode.outline.caretUp}
          style={{
            padding: 3
          }}
          color={theme.colors.icon.tomato}
          size={35} />
      </ScrollTopSection>
    </TouchableOpacity>
  );
}
export default ScrollTopComponent;
