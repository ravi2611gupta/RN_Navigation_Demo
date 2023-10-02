import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import { COLORS } from '../constants/Theme';

import SearchScreen from '../screens/main/SearchScreen';
import PostScreen from '../screens/main/PostScreen';

import HomeNavigator from './HomeNavigator';
import ProfileNavigator from './ProfileNavigator';
import SaveNavigator from './SaveNavigator';

function MainNavigator() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName={'Home'}
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: COLORS.primary,
            }}
        >
            <Tab.Screen
                name={'Home'}
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name='home' color={color}
                            size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name={'Search'}
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name='search1' color={color}
                            size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name={'Post'}
                component={PostScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name='plus-square' color={color}
                            size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name={'Saved'}
                component={SaveNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name='bookmark-o' color={color}
                            size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name={'Profile'}
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name='user-o' color={color}
                            size={25} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default MainNavigator;