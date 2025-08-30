import React from "react";
import {stackNavigatorConfig} from "./navigationConfig";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Dashboard"} id={"MainStack"}>
                {
                    stackNavigatorConfig.map((screen) => (
                        <Stack.Screen key={screen.name}
                                      name={screen.name}
                                      component={screen.component}
                                      options={screen.options}/>
                    ))

                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}