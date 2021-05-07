import React, { useEffect, useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlexWrap, WrapContainer } from "../../../styles/global.style";
import ScrollContextProvider, { useScroller } from "../../providers/scroll-context/scroll-context-provider";
import HeaderComponent from "../../components/header/header.component";
import CartButtonComponent from "../../components/buttons/cart-button/cart-button.component";
import BadgeComponent from "../../components/header/badge/badge.component";
import MoreOptionsComponent from "../../components/buttons/more-options/more-options.component";
import SocialShareComponent from "../../components/buttons/social-share/social-share.component";
import BackButtonComponent from "../../components/buttons/back-button/back-button.component";
import Axios from "axios-observable";
import SlidesComponent from "../../components/slides/slides.component";
import TextLabelComponent from "../../components/common/text-label.component";
import { RatingComponent, TotalRatingCount } from "../../components/product/product.style";
import { DetailPageStyle } from "./detail-page.style";
import DetailContent from "../../components/detail-content/detail-content.component";
import HeaderActionContextProvider, { useActionHeader } from "../../providers/header-action/header-action.provider";

function DetailPage({route, navigation}) {
  return(
    <ScrollContextProvider>
      <HeaderActionContextProvider>
        <WrapContainer>
          {/*<HeaderComponent />*/}
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
