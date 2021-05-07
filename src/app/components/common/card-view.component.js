import React from "react";
import { View } from "react-native";
export default function CardViewComponent({children}) {
  return(
    <View style={{
      padding: 16
    }}>
      {children}
    </View>
  );
}
