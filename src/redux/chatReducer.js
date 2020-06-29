import auth from '@react-native-firebase/auth';
import {act} from 'react-test-renderer';

const initialState = {
  showError: {
    show: false,
    errorMessage: '',
  },
  loading: false,
  signin: false,
  chatList: [],
  chatMessageList: [],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'change_signin':
      console.log('U r authenticated');
      let prev = state.signin;
      return {...state, signin: !prev};

    case 'update_chatList':
      return {...state, chatList: {...action.payload}};

    case 'update_chatMessageList':
      return {...state, chatMessageList: {...action.payload}};

    case 'update_error':
      let error = showError;
      error.show = !error.show;
      error.show
        ? (error.errorMessage = action.payload)
        : (error.errorMessage = '');
      return {...state, showError: {...error}};

    default:
      return {...state, chatMessageList: {...action.payload}};
  }
};

export default chatReducer;
