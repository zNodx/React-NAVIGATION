import { AntDesign } from "@expo/vector-icons";
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from "../pages/About";
import Contact from "../pages/Contact";
import StackRoutes from "./stackRoutes";
import CustomDrawer from "../components/CustomDrawer";
const Drawer = createDrawerNavigator();


export default function Routes() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#ddd",
        },
        drawerActiveBackgroundColor: "#f5f5f5",
      }}
    >
      <Drawer.Screen
        name="HomeStack"
        component={StackRoutes}
      />
      <Drawer.Screen
        name="About"
        component={About}
        />
      <Drawer.Screen
        name="Contact"
        component={Contact}
      />
    </Drawer.Navigator>
  );
}
