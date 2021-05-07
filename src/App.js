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

const App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  function TabContent() {
    return (
      <Tab.Navigator
        initialRouteName={"Home"}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "md-home" : "ios-home-outline";
            } else if (route.name === "Categories") {
              iconName = focused ? "list" : "list-outline";
            } else if (route.name === "Me") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "cog" : "cog-outline";
            }
            return <Icon type={"ionicon"} name={iconName} size={25} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Categories" component={CategoryPage} />
        <Tab.Screen name="Me" component={AccountPage} />
        <Tab.Screen name="Settings" component={SettingPage} />
      </Tab.Navigator>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={TabContent}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen
            name="Detail"
            component={DetailPage}
            options={{
              headerShown: false,
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
