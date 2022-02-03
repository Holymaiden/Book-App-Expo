import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { Home } from "../screens";
import { View } from "react-native";
import Shadow from "../styles/Shadows";

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
        marginHorizontal: wp(2),
        position: "absolute",
        bottom: hp(2.5),
        elevation: 2,
        borderRadius: 15,
        height: hp(9),
        position: "absolute",
        overflow: "hidden",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
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
