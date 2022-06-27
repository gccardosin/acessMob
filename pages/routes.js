import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppHome from "./AppHome";
import AppLojas from "./AppLojas";
import AppFavoritos from "./AppFavoritos";
import AppLogin from "./AppLogin";
import AppCadastroLoja from "./AppCadastroLojas";

import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#c7c7c7',
                    borderTopColor: 'transparent',
                    paddingBottom: 5,
                    paddingTop: 5,
                },
                tabBarActiveTintColor: 'black',
            }}
        >


            <Tab.Screen
                name="Home"
                component={AppHome}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Restaurantes"
                component={AppLojas}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="bowl" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Favoritos"
                component={AppFavoritos}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="heart" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Login"
                component={AppLogin}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="eye" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="cadastrarRest"
                component={AppCadastroLoja}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="eye" size={size} color={color} />
                    )
                }}
            />
            </Tab.Navigator>
    )
}