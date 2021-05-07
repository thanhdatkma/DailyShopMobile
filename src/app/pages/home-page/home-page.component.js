import React from "react";
import { WrapContainer } from "../../../styles/global.style";
import { Button, View } from "react-native";
import HeaderComponent from "../../components/header/header.component";
import HomeContentComponent from "../../components/home-content/home-content.component";
import ScrollContextProvider, { ScrollContext } from "../../providers/scroll-context/scroll-context-provider";

function HomePage({navigation}) {
  return(
    <ScrollContextProvider>
      <WrapContainer>
        <HeaderComponent />
        <HomeContentComponent
          scrollEnable={true}
          navigation={navigation}
          refreshMode={true}
          scrollToTopIcon={{ enableMode: false }}>
        </HomeContentComponent>
      </WrapContainer>
    </ScrollContextProvider>
  );
}
export default HomePage;
