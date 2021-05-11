/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryPage from "./app/pages/category-page/category-page.component";
import AccountPage from "./app/pages/account-page/account-page.component";
import SettingPage from "./app/pages/settings-page/setting-page.component";
import DetailPage from "./app/pages/detail-page/detail-page.component";
import { Icon } from "react-native-elements";
import HomePage from "./app/pages/home-page/home-page.component";
import { theme } from "./styles/theme";
import { RouteName } from "./app/infastructure/route/route-name";
import { ThemeProvider } from "styled-components/native";
import { iconMode } from "./styles/global.style";

const App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  function TabContent(props) {
    return (
      <Tab.Navigator
        initialRouteName={RouteName.Home}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === RouteName.Home) {
              iconName = focused ? iconMode.filled.home : iconMode.outline.home;
            } else if (route.name === RouteName.Categories) {
              iconName = focused ? iconMode.filled.list: iconMode.outline.list;
            } else if (route.name === RouteName.Account) {
              iconName = focused ? iconMode.filled.person : iconMode.outline.person;
            } else if (route.name === RouteName.Setting) {
              iconName = focused ? iconMode.filled.cog : iconMode.outline.cog;
            }
            return <Icon type={theme.icons.type} name={iconName} size={25} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: theme.colors.icon.tomato,
          inactiveTintColor: theme.colors.icon.gray,
        }}>
        <Tab.Screen name={RouteName.Home} component={HomePage} />
        <Tab.Screen name={RouteName.Categories} component={CategoryPage} />
        <Tab.Screen name={RouteName.Account} component={AccountPage} />
        <Tab.Screen name={RouteName.Setting} component={SettingPage} />
      </Tab.Navigator>
    );
  }

  return (
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name={RouteName.Home}
                component={TabContent}
                options={{
                  headerShown: false,
                }} />
              <Stack.Screen
                name={RouteName.Detail}
                component={DetailPage}
                options={{
                  headerShown: false,
                }}/>
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
  );
};

export default App;
