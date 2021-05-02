import React from "react";
import GlobalStyles from "../../../styles/global.style";
import { View } from "react-native";
import HeaderComponent from "../../components/header/header.component";
import PageContentComponent from "../../components/page-content/page-content.component";
import ScrollContextProvider, { ScrollContext } from "../../providers/scroll-context/scroll-context-provider";
function HomePage({navigation}) {
  return(
    <ScrollContextProvider>
      <View style={GlobalStyles.wrapContainer}>
        <HeaderComponent />
        <PageContentComponent
          scrollEnable={true}
          navigation={navigation}
          refreshMode={true}
          scrollToTopIcon={{ enableMode: false }}>
        </PageContentComponent>
      </View>
    </ScrollContextProvider>
  );
}
export default HomePage;
