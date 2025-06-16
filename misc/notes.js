/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import {
    Image,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import Home from './assets/images/Home.png';
import Offer from './assets/images/Offer.png';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import colors from './utils/globalcolors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function OfferScreen() {
    return <View></View>;
}
function RootTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                // animation: 'fade',
                headerShown: false,
            }}
        >
            {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
            {/* <Tab.Screen name="Profile" component={MainScreen} /> */}
            <Tab.Screen name="Offer" component={OfferScreen} />
        </Tab.Navigator>
    );
}

function App() {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Main"
            >
                <Stack.Screen name="Main" component={MainScreen} />
                {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
                {/* <Stack.Screen name="Offer" component={OfferScreen} /> */}
                <Stack.Screen name="BottomScreens" component={RootTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
