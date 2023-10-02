import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { COLORS } from '../constants/Theme';
import DishesScreen from '../screens/ProfileScreens/DishesScreen';
import ReviewScreen from '../screens/ProfileScreens/ReviewScreen';
import ListsScreen from '../screens/ProfileScreens/ListsScreen';

const Tab = createMaterialTopTabNavigator();

function ProfileNavigator() {
    return (
        <Tab.Navigator
            initialRouteName={'Dishes'}
            style={{
                marginTop: 50,
            }}
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12 },
                tabBarIndicatorStyle: {
                    backgroundColor: COLORS.primary,
                },
                tabBarInactiveTintColor: COLORS.secondary,
                tabBarActiveTintColor: COLORS.primary,
            }}
        >
            <Tab.Screen name="Dishes" options={{ tabBarLabel: 'Dishes' }}
                component={DishesScreen} />
            <Tab.Screen name="Reviews" options={{ tabBarLabel: 'Reviews' }}
                component={ReviewScreen} />
            <Tab.Screen name="Lists" options={{ tabBarLabel: 'Lists' }}
                component={ListsScreen} />
        </Tab.Navigator>
    )
}

export default ProfileNavigator;