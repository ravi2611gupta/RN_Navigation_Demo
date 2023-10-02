import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import MainNavigator from "./src/navigators/MainNavigators";
import 'react-native-gesture-handler';


export default function App() {

  const theme = {
    colors: {
      ...DefaultTheme.colors,
      background: "transparent"
    }
  }

  return (
    <NavigationContainer theme={theme}>
      <MainNavigator />
    </NavigationContainer>
  );
}
