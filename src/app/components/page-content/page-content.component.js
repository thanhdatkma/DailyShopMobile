import React, { JSXElementConstructor, useCallback, useEffect, useState } from "react";
import {
  FlatList,
  RefreshControl,
  StatusBar,Text, TextProps,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { Icon } from "react-native-elements";
import Axios from "axios-observable";
import { useScroller } from "../../providers/scroll-context/scroll-context-provider";
import ProductComponent from "../product/product.component";
import NoResultComponent from "../no-result/no-result.component";
import SlidesComponent from "../slides/slides.component";
import { CommonHelper } from "../../helpers/common.helper";

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

export default function PageContentComponent(props: Props) {
  let defaultStyle = {
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight
    },
    scrollView: {
      backgroundColor: "white",
      // marginHorizontal: 20,
      marginBottom: 20,
      height: "100%",
      padding: 0
    },
    text: {
      fontSize: 42
    }
  };
  defaultStyle = Object.assign(defaultStyle, props.customStyle);
  const [styles, setStyles] = useState(new CommonHelper().generateStyleHelper(defaultStyle));
  // @ts-ignore
  const scrollToTopTemplate = <View
    style={{
      backgroundColor: "pink",
      width: 50,
      height: 50,
      borderStyle: "solid",
      borderRadius: 50,
      borderWidth: 2,
      borderColor: "gray",
      position: "absolute",
      bottom: 20,
      right: 20,
      zIndex: 5
    }}>
    <Icon type={"ionicon"} name={"caret-up-outline"} size={35} style={{
      padding: 3
    }} />
  </View>;
  const { updateOffset } = useScroller();
  // const [refreshing, setRefreshing] = useState(false);
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
    Axios.get(`http://localhost:3000/products?_start=${filter.start}&_limit=${filter.limit}'}`)
      .subscribe((res: any) => {
        // let tmpList = productList.concat(res.data);
        setProductList( [...productList, ...res.data]);
        if (refreshing) {
          setRefreshing(false);
        }
      }, error => {
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
    <View>
      <FlatList
        ref={ref => ref}
        data={productList}
        renderItem={({ item, index }) => (
          <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Detail')}>
            <View style={{
              flex: 1,
              flexDirection: "column"
            }}>
              <ProductComponent key={index.toString()} total={productList.length} index={index} productItem={item} />
            </View>
          </TouchableWithoutFeedback>

        )}
        numColumns={2}
        style={{
          flex: 1,
          marginBottom: 20
        }}
        ListEmptyComponent={<NoResultComponent />}
        extraData={productList}
        onScroll={({ nativeEvent }) => {
          updateOffset(nativeEvent.contentOffset.y > 109 ? 109 : nativeEvent.contentOffset.y < 0 ? -0.11 : nativeEvent.contentOffset.y);
        }}
        ListHeaderComponent={
          <>
            <SlidesComponent navigation={props.navigation} autoplay={true} />
            <Text
              style={{
                paddingVertical: 10,
                paddingHorizontal: 14,
                fontSize: 16,
                fontWeight: 'bold',
                // marginTop: 10,
                backgroundColor: '#ffffff'
              }}>New Products</Text>
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
      {props.scrollToTopIcon?.enableMode
        ? (props.scrollToTopIcon?.templateContent
          ? props.scrollToTopIcon?.templateContent
          : scrollToTopTemplate)
        : <Text></Text>}
    </View>
  );
}
