import { createStackNavigator } from '@react-navigation/stack';
import SaveListScreen from '../screens/SaveScreens/SaveListScreen';
import ListItem1 from '../screens/SaveScreens/ListItem1';
import ListItem2 from '../screens/SaveScreens/ListItem2';
import ListItem3 from '../screens/SaveScreens/ListItem3';

const Stack = createStackNavigator();

function SaveNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={'SaveList'}
        >
            <Stack.Screen name="SaveList" component={SaveListScreen} />
            <Stack.Screen name="ListItem1" component={ListItem1} />
            <Stack.Screen name="ListItem2" component={ListItem2} />
            <Stack.Screen name="ListItem3" component={ListItem3} />
        </Stack.Navigator>
    );
}

export default SaveNavigator;