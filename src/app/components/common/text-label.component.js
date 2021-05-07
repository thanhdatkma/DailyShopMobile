import React from "react";
import { Text, View } from "react-native";
export default function TextLabelComponent({children}) {
  return(
    <View style={{
      padding: 10,
      minHeight: 20,
      backgroundColor: '#ffff'
    }}>
      <Text>{children}</Text>
    </View>
  );
}
