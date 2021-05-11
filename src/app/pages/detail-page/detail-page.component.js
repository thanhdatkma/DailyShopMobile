import React, { useEffect, useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { WrapContainer } from "../../../styles/global.style";
import ScrollContextProvider, { useScroller } from "../../providers/scroll-context/scroll-context-provider";
import DetailContent from "../../components/detail-content/detail-content.component";
import HeaderActionContextProvider, { useActionHeader } from "../../providers/header-action/header-action.provider";

function DetailPage({route, navigation}) {
  const { opacity, updateOffset } = useScroller();
  return(
    <ScrollContextProvider>
      <HeaderActionContextProvider>
        <WrapContainer>
          <DetailContent
            route={route}
            navigation={navigation}>
          </DetailContent>
        </WrapContainer>
      </HeaderActionContextProvider>
    </ScrollContextProvider>
  );
}
export default DetailPage;
