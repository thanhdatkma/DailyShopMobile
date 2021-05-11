import React from "react";
import { WrapContainer } from "../../../styles/global.style";
import HeaderComponent from "../../components/header/header.component";
import HomeContentComponent from "../../components/home-content/home-content.component";
import ScrollContextProvider from "../../providers/scroll-context/scroll-context-provider";
import { theme } from "../../../styles/theme";
import { ThemeProvider } from "styled-components/native";
import LeftHeaderComponent from "../../components/header/left-header/left-header.component";

function HomePage({navigation}) {
  return(
    <ThemeProvider theme={theme}>
      <ScrollContextProvider>
        <WrapContainer theme={theme}>
          <HeaderComponent />
          <HomeContentComponent
            scrollEnable={true}
            navigation={navigation}
            refreshMode={true}
            scrollToTopIcon={{ enableMode: false }}>
          </HomeContentComponent>
        </WrapContainer>
      </ScrollContextProvider>
    </ThemeProvider>
  );
}
export default HomePage;
