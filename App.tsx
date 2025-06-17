import * as React from 'react';
import {
  Text,
  View,
  Easing,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './screens/MainScreen';
import LinearGradient from 'react-native-linear-gradient';
import Offer from './assets/images/Offer.png';
import Home from './assets/images/Home.png';
import Flake from './assets/images/flake.png';
import Vector from './assets/images/Vector.png';
import { GradientBorderView } from '@good-react-native/gradient-border';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from './utils/globalcolors';

const Tab = createBottomTabNavigator();
const screenWidth = Dimensions.get('window').width;

function OfferScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
      }}
    >
      <Text style={{ color: '#FFF' }}>Offers!</Text>
    </View>
  );
}
function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
      }}
    >
      <Text style={{ color: '#FFF' }}>Profile!</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="yolo pay"
        screenOptions={{
          animation: 'none',
          tabBarStyle: styles.tabbarstyle,
          tabBarLabelStyle: { marginTop: 12 },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="home"
          options={{
            tabBarLabel: 'home',
            tabBarActiveTintColor: '#FFFFFF',
            tabBarIcon: ({ color }) => (
              <GradientBorderView
                gradientProps={{
                  colors: ['#FFFFFF', '#000000'],
                }}
                style={{
                  borderWidth: 1,
                  borderRadius: 100,
                }}
              >
                <Image source={Home} style={{ margin: 10 }} />
              </GradientBorderView>
            ),
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="yolo pay"
          options={{
            tabBarActiveTintColor: '#FFFFFF',
            tabBarLabel: 'yolo pay',
            tabBarIcon: ({ color }) => (
              <GradientBorderView
                gradientProps={{
                  colors: ['#FFFFFF', '#000000'],
                }}
                style={{
                  borderWidth: 1,
                  borderRadius: 100,
                }}
              >
                <Image source={Vector} style={{ margin: 18 }} />
              </GradientBorderView>
            ),
          }}
          component={MainScreen}
        />
        <Tab.Screen
          name="ginie"
          options={{
            tabBarLabel: 'ginie',
            tabBarActiveTintColor: '#FFFFFF',
            tabBarIcon: ({ color }) => (
              <GradientBorderView
                gradientProps={{
                  colors: ['#FFFFFF', '#000000'],
                }}
                style={{
                  borderWidth: 1,
                  borderRadius: 100,
                }}
              >
                <Image source={Offer} style={{ margin: 10 }} />
              </GradientBorderView>
            ),
          }}
          component={OfferScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  tabbarstyle: {
    backgroundColor: colors.primary,
    position: 'absolute',
    borderTopWidth: 1.5,
    elevation: 4,
    shadowColor: '#FFF',
    borderTopEndRadius: 60,
    borderTopStartRadius: 60,
    height: 115,
    paddingTop: '8%',
    borderTopColor: '#FFFF',
  },
});
