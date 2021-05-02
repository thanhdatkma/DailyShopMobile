import React from 'react';
import { View, Text } from "react-native";

type Props = {}

export default function NoResultComponent({}: Props) {
  return (
    <View style={{
      flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
    }}>
      <Text style={{
        marginVertical: "70%"
      }}>No result</Text>
    </View>
  );
}
