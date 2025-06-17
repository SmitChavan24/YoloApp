import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { GradientBorderView } from '@good-react-native/gradient-border';
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, useColorScheme } from 'react-native';
import paddingHelper from '../utils/paddingHelper';
import colors from '../utils/globalcolors';
import * as Animatable from 'react-native-animatable';
import Freeze from '../assets/images/Freeze.png';
import Flake from '../assets/images/flake.png';
import Rect from '../assets/images/Rect.png';
import Yes from '../assets/images/yes.png';
import Yolo from '../assets/images/yolo.png';
import Cvv from '../assets/images/cvv.png';
import Eyes from '../assets/images/eye.png';
import Copy from '../assets/images/copy.png';
import Group from '../assets/images/Group.png';
import Flake2 from '../assets/images/Freeze2.png';
import LinearGradient from 'react-native-linear-gradient';
const screenWidth = Dimensions.get('window').width;
const MainScreen = () => {
  const [freeze, setFreeze] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{ marginLeft: 20 }}>
        <Text style={styles.txt}>select payment mode</Text>
        <Text style={styles.txt2}>
          choose your preferred payment method to make payment.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '50%',
            marginBottom: 10,
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

        <Text style={styles.txt3}>
          {'your digital debit card'.toUpperCase()}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {freeze ? (
            <Animatable.Image
              animation="fadeIn"
              duration={4000}
              iterationCount={1}
              iterationDelay={1000}
              source={Freeze}
              style={{
                height: (screenWidth * 63) / 100,
                width: (screenWidth * 40) / 100,
                resizeMode: 'cover',
              }}
            />
          ) : (
            <Animatable.View
              animation="zoomIn"
              duration={1000}
              iterationCount={1}
              iterationDelay={1000}
              style={{
                borderColor: '#FFFF',
                borderWidth: 1,
                borderRadius: 10,
                padding: 15,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 7,
                }}
              >
                <Image source={Yolo}></Image>
                <Image source={Yes}></Image>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 7,
                }}
              >
                <View
                  style={{
                    alignItems: 'center',
                    // justifyContent: 'space-between',
                  }}
                >
                  <Text style={styles.txtcard}>8124</Text>
                  <Text style={styles.txtcard}>4212</Text>
                  <Text style={styles.txtcard}>3456</Text>
                  <Text style={styles.txtcard}>7890</Text>
                </View>
                <View
                  style={{
                    marginLeft: '10%',
                    // justifyContent: 'space-between',
                  }}
                >
                  <Text style={styles.txtcard}>Expiry</Text>
                  <Text style={styles.txtcard}>01/28</Text>

                  <Text style={styles.txtcard}>cvv</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <Image source={Cvv}></Image>
                    <Image source={Eyes}></Image>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 15,
                }}
              >
                <Image source={Copy}></Image>
                <Text style={styles.txtcard}>copy details</Text>
              </View>

              <Image source={Group} style={{ alignSelf: 'flex-end' }}></Image>
            </Animatable.View>
          )}

          <View style={{ marginHorizontal: '8%' }}>
            <TouchableOpacity
              style={[styles.freeze, !freeze && { borderColor: '#FFF' }]}
              onPress={() => setFreeze(!freeze)}
            >
              <Image source={freeze ? Flake : Flake2}></Image>
            </TouchableOpacity>
            <Text style={[styles.txtcard, freeze && { color: 'red' }]}>
              un freeze
            </Text>
          </View>
        </View>
      </View>
      {/* <NewAppScreen templateFileName="App.tsx" /> */}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  freeze: {
    borderColor: '#A90808',
    borderWidth: 0.7,
    borderRadius: 100,
    paddingVertical: 15,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingTop: paddingHelper(),
    backgroundColor: colors.primary,
  },
  txtcard: {
    color: colors.white,
    fontFamily: colors.fontRegular,
    fontSize: 12,
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
    marginVertical: 7,
  },
  txt2: {
    color: '#FFFFFF50',
    fontFamily: colors.fontRegular,
    fontSize: 14,
    marginBottom: 15,
  },
  txt3: {
    color: '#FFFFFF20',
    fontFamily: colors.fontRegular,
    fontSize: 12,
    marginBottom: 10,
  },
});
