import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SignUpScreen from './src/screen/SignUpScreen';
import LoginScreen from './src/screen/LoginScreen';
import ChatListScreen from './src/screen/ChatListScreen';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/chatStore';

const navigator = createStackNavigator(
  {
    Home: {
      screen: SignUpScreen,
      navigationOptions: {
        headerShown: false,
        headerBackTitle: '',
      },
    },

    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerShown: false,
        headerBackTitle: '',
      },
    },

    ChatList: {
      screen: ChatListScreen,
      navigationOptions: {
        headerShown: false,
        headerBackTitle: '',
      },
    },
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: '',
      headerBackTitle: '',
    },
  },
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  );
};
