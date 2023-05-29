import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./components/Welcome";
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import Login from "./components/Login";
import MenuItems from "./components/MenuItems";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <View style={{flex: 1, backgroundColor: '#EE9972' }}>
          <LittleLemonHeader />
          <Stack.Navigator initialRouteName="Login" >
            <Stack.Screen name="Welcome"  options={{ headerTitleAlign: "center"}} component={Welcome} />
            <Stack.Screen name="Login"  options={{ headerTitleAlign: "center"}} component={Login} />
            <Stack.Screen name="Menu" component={MenuItems}/>
          </Stack.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View>
      </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});