import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import About from "../pages/About";
import Contact from "../pages/Contact";
import StackRoutes from "./stackRoutes";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard:true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "red",
          tabBarStyle: {
            backgroundColor: "black",
            borderTopColor: "red",
            borderTopWidth: 2,
          },
        }}
      >
        <Tab.Screen
          name="HomeStack"
          component={StackRoutes}
          options={{ 
            tabBarLabel: "Inicio",
            tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          )
          }}
        />
        <Tab.Screen 
          name="About" 
          component={About}
          options={{
            tabBarLabel: "Sobre",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen 
          name="Contact" 
          component={Contact} 
          options={{
            tabBarLabel: "Contato",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="contacts" color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
  );
}
