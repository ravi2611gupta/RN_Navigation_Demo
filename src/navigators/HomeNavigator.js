import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FeedScreen from '../screens/HomeScreens/FeedScreen';
import ArticleScreen from '../screens/HomeScreens/ArticleScreen';


function HomeNavigator() {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Feed" component={FeedScreen} />
            <Drawer.Screen name="Article" component={ArticleScreen} />
        </Drawer.Navigator>
    );
}

export default HomeNavigator;