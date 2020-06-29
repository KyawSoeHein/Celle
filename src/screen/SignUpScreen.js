import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import color from '../config/color';
import {TextInputLayout} from 'rn-textinputlayout';
import {TouchableHighlight} from 'react-native-gesture-handler';
import * as Authentication from '../api/authentication';
import {useSelector} from 'react-redux';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdVisible, setPwdVisible] = useState(true);

  const signin = useSelector(state => state.signin);

  console.log(signin);

  // useEffect(() => {
  if (signin) {
    console.log(signin);
    navigation.navigate('ChatList');
  }
  // }, [signin]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <View style={{paddingVertical: 16}} />
      <TextInputLayout
        style={styles.inputLayout}
        labelTextStyle={{fontWeight: 'bold'}}
        focusColor={color.text_color_grey}>
        <TextInput
          style={styles.textInput}
          autoCorrect={false}
          autoCapitalize={false}
          placeholder={'Email Address'}
          onChangeText={t => {
            setEmail(t);
          }}
        />
      </TextInputLayout>
      <View style={{flexDirection: 'row'}}>
        <TextInputLayout
          style={styles.inputLayout}
          labelTextStyle={{fontWeight: 'bold'}}
          focusColor={color.text_color_grey}>
          <TextInput
            style={styles.textInput}
            autoCorrect={false}
            placeholder={'Password'}
            secureTextEntry={pwdVisible}
            onChangeText={t => {
              setPwd(t);
            }}
          />
        </TextInputLayout>

        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 10,
            top: 45,
          }}
          onPress={() => setPwdVisible(!pwdVisible)}>
          <Image
            source={require('../assets/eye-xxl.png')}
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => Authentication.RegisterAuthentication(email, pwd)}>
          <Image
            source={require('../assets/outline_arrow_forward.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableHighlight>

        <View style={{flex: 1}} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableHighlight
          style={{marginTop: 64, width: 'auto', alignItems: 'flex-start'}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Login')}
          underlayColor={color.bg_color}>
          <Text style={{fontFamily: 'Merriweather-Light', fontSize: 12}}>
            Already have an account?
          </Text>
        </TouchableHighlight>

        <View style={{flex: 1}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bg_color,
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },

  title: {
    fontSize: 40,
    color: color.text_color,
    fontFamily: 'Merriweather-Light',
    paddingStart: 16,
  },

  textInput: {
    fontSize: 14,
    height: 40,
  },

  inputLayout: {
    marginVertical: 16,
    width: '100%',
  },

  button: {
    marginTop: 16,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: color.text_color_black,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.text_color_black,
  },
});

export default SignUpScreen;
