import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Details from "../pages/Datails";
const Stack = createNativeStackNavigator();

export default function StackRoutes(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}  />
      <Stack.Screen name="Details" component={Details} options={{headerShown:false}}  />
    </Stack.Navigator>
  );
}