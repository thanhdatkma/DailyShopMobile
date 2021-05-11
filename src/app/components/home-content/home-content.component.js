import React, { JSXElementConstructor, useCallback, useEffect, useState } from "react";
import {
  FlatList,
  RefreshControl, ScrollView, TextProps,
  TouchableWithoutFeedback,
} from "react-native";
import { Text } from "react-native-elements";
import Axios from "axios-observable";
import { useScroller } from "../../providers/scroll-context/scroll-context-provider";
import ProductComponent from "../product/product.component";
import NoResultComponent from "../no-result/no-result.component";
import SlidesComponent from "../slides/slides.component";
import { RouteName } from "../../infastructure/route/route-name";
import { FlexCol, PaddingView } from "../../../styles/global.style";
import ScrollTopComponent from "../buttons/scroll-top/scroll-top.component";
import { TextLabelComponent } from "../common/common.component";
import { theme } from "../../../styles/theme";
import { ProductList } from "./home-content.style";

type Props = {
  children?: React.ReactElement<{}> | TextProps | string | JSXElementConstructor<any>;
  customStyle?: any;
  refreshMode?: boolean,
  refreshTitle?: string,
  scrollEnable?: boolean,
  scrollToTopIcon?: {
    enableMode?: boolean,
    templateContent?: React.ReactElement<{}> | null
  },
  backToHomeIcon?: {
    enableMode?: boolean,
    templateContent?: React.ReactElement<{}> | null
  },
  navigation: any,
}

export default function HomeContentComponent(props: Props) {
  const { updateOffset } = useScroller();
  let page = 0;
  let limit = 10;
  const [productList, setProductList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isRefreshed, setIsRefreshed] = useState(false);
  const [filter, setFilter] = useState({
    start: page,
    limit: limit
  });

  function getProduct() {
    Axios.get(`http://localhost:3000/products?_start=${filter.start}&_limit=${filter.limit}`)
      .subscribe((res: any) => {
        setProductList( [...productList, ...res.data]);
        if (refreshing) {
          setRefreshing(false);
        }
      }, error => {
        // Show toast message from server
        console.log(error);
      });
  }

  const onRefresh = useCallback(() => {
    setFilter({
      start: page,
      limit: limit
    });
    setRefreshing(true);
    setProductList([]);
  }, []);

  function loadMoreProducts() {
    if (!isRefreshed) {
      setFilter({
        ...filter,
        start: filter.start += filter.limit
      });
    }
    setIsRefreshed(false)
  }

  useEffect(() => {
    setIsRefreshed(refreshing);
    return getProduct();
  }, [filter]);
  return (
    <>
      <ProductList
        ref={ref => ref}
        data={productList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableWithoutFeedback onPress={() => props.navigation.navigate(RouteName.Detail, {item: item})}>
            <FlexCol>
              <ProductComponent key={item.id.toString()} total={productList.length} index={index} productItem={item} />
            </FlexCol>
          </TouchableWithoutFeedback>

        )}
        numColumns={2}
        ListEmptyComponent={<NoResultComponent />}
        extraData={productList}
        onScroll={({ nativeEvent }) => {
          updateOffset(nativeEvent.contentOffset.y > 109 ? 109 : nativeEvent.contentOffset.y < 0 ? -0.11 : nativeEvent.contentOffset.y);
        }}
        ListHeaderComponent={
          <>
            <SlidesComponent
              hidePaginationBox={true}
              navigation={props.navigation}
              autoplay={true} />
            <TextLabelComponent theme={theme} h4>New Products</TextLabelComponent>
          </>
        }
        refreshControl={
          <RefreshControl
            title={props.refreshTitle ? props.refreshTitle : "Loading..."}
            enabled={props.refreshMode}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        onEndReached={loadMoreProducts}
        onEndReachedThreshold={0.5}
        automaticallyAdjustContentInsets={false}
        removeClippedSubviews={true}
      />
      {/*{props.scrollToTopIcon?.enableMode*/}
      {/*  ? (props.scrollToTopIcon?.templateContent*/}
      {/*    ? props.scrollToTopIcon?.templateContent*/}
      {/*    : <ScrollTopComponent />)*/}
      {/*  : <Text></Text>}*/}
    </>
  );
}
