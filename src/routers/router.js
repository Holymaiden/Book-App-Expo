import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { Home, Setting, Kategori, Cari } from "../screens";
import { Image, StyleSheet, View } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeStack() {
  return (
    <Tab.Navigator
      shifting={false}
      initialRouteName="HOME"
      headerMode="none"
      barStyle={{
        backgroundColor: "#ffffff",
        marginHorizontal: wp(5),
        position: "absolute",
        bottom: hp(2.5),
        elevation: 0,
        borderRadius: 15,
        position: "absolute",
        overflow: "hidden",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../assets/icons/home2.png")}
                style={Style.tabScreen}
              />
            ) : (
              <Image
                source={require("../assets/icons/home.png")}
                style={Style.tabScreen}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Kategori"
        component={Kategori}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../assets/icons/book-alt2.png")}
                style={Style.tabScreen}
              />
            ) : (
              <Image
                source={require("../assets/icons/book-alt.png")}
                style={Style.tabScreen}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Cari"
        component={Cari}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../assets/icons/search2.png")}
                style={Style.tabScreen}
              />
            ) : (
              <Image
                source={require("../assets/icons/search.png")}
                style={Style.tabScreen}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../assets/icons/settings2.png")}
                style={Style.tabScreen}
              />
            ) : (
              <Image
                source={require("../assets/icons/settings.png")}
                style={Style.tabScreen}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={HomeStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Router;

const Style = StyleSheet.create({
  tabScreen: {
    width: wp(2),
    height: hp(3.9),
    marginTop: hp(0.5),
  },
});
