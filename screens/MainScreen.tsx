import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { GradientBorderView } from '@good-react-native/gradient-border';
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, useColorScheme } from 'react-native';
import paddingHelper from '../utils/paddingHelper';
import colors from '../utils/globalcolors';
import Freeze from '../assets/images/Freeze.png';
import Flake from '../assets/images/flake.png';
import Rect from '../assets/images/Rect.png';
import LinearGradient from 'react-native-linear-gradient';

const MainScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={styles.txt}>select payment mode</Text>
      <Text style={styles.txt2}>
        choose your preferred payment method to make payment.
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '50%',
        }}
      >
        <TouchableOpacity>
          <GradientBorderView
            gradientProps={{
              colors: ['#FFFFFF', '#000000'],
            }}
            style={{
              borderWidth: 1,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                color: '#FFFFFF',
                marginHorizontal: 18,
                marginVertical: 7,
              }}
            >
              pay
            </Text>
          </GradientBorderView>
        </TouchableOpacity>
        <TouchableOpacity>
          <GradientBorderView
            gradientProps={{
              colors: ['#A90808', '#000000'],
            }}
            style={{
              borderWidth: 1,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                color: '#fff',
                marginHorizontal: 18,
                marginVertical: 7,
              }}
            >
              card
            </Text>
          </GradientBorderView>
        </TouchableOpacity>
      </View>

      <Text style={styles.txt3}>{'your digital debit card'.toUpperCase()}</Text>
      {/* <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          // backgroundColor: 'red',
        }}
      >
        <Image source={Freeze} style={{ height: 300, width: 180 }}></Image>
        <TouchableOpacity
          style={{
            borderColor: '#A90808',
            borderWidth: 0.7,
            borderRadius: 100,
            padding: 12,
          }}
        >
          <Image source={Flake}></Image>
        </TouchableOpacity>
      </View> */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          // backgroundColor: 'red',
        }}
      >
        <Image source={Rect} style={{}}></Image>
        <TouchableOpacity
          style={{
            borderColor: '#A90808',
            borderWidth: 0.7,
            borderRadius: 100,
            padding: 12,
          }}
        >
          <Image source={Flake}></Image>
        </TouchableOpacity>
      </View>
      {/* <NewAppScreen templateFileName="App.tsx" /> */}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: paddingHelper(),
    backgroundColor: colors.primary,
  },
  txtb: {
    color: colors.white,
    fontFamily: colors.fontRegular,
    fontSize: 16,
  },
  txt: {
    color: colors.white,
    fontFamily: colors.fontSemiBold,
    fontSize: 24,
  },
  txt2: {
    color: '#FFFFFF50',
    fontFamily: colors.fontRegular,
    fontSize: 14,
  },
  txt3: {
    color: '#FFFFFF20',
    fontFamily: colors.fontRegular,
    fontSize: 12,
  },
});
