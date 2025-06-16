import * as React from 'react';
import {
  Text,
  View,
  Easing,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen';

const Tab = createBottomTabNavigator();
const screenWidth = Dimensions.get('window').width;

function OfferScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}
function CustomTabBar({ state, descriptors, navigation }) {
  const scrollRef = React.useRef();

  React.useEffect(() => {
    // Scroll to keep the selected tab in center
    scrollRef.current?.scrollTo({
      x: (state.index - 1) * (screenWidth / 3),
      animated: true,
    });
  }, [state.index]);

  return (
    <View style={styles.tabContainer}>
      <ScrollView
        horizontal
        ref={scrollRef}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabScroll}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel ?? options.title ?? route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={[styles.tabItem, isFocused && styles.tabItemFocused]}
            >
              <Text style={{ color: isFocused ? '#fff' : '#aaa' }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

function RootTabs() {
  return (
    <Tab.Navigator
      initialRouteName="yolo pay"
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        animation: 'fade',
        headerShown: false,
      }}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="yolo pay" component={MainScreen} />
      <Tab.Screen name="ginie" component={OfferScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootTabs />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    backgroundColor: '#000',
    paddingVertical: 10,
  },
  tabScroll: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  tabItem: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: '#222',
  },
  tabItemFocused: {
    backgroundColor: '#555',
  },
});
