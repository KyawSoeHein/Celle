import auth, {firebase} from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import store from '../redux/chatStore';

export const checkAuthentication = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return dispatch({type: 'change_signin'});
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
};

export const RegisterAuthentication = (username, password) => {
  auth()
    .createUserWithEmailAndPassword(username, password)
    .then(() => {
      console.log('Registration successful');
      store.dispatch({type: 'change_signin'});
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        store.dispatch({
          type: 'update_error',
          payload: 'That email address is already in use',
        });
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        store.dispatch({
          type: 'update_error',
          payload: 'That email address is invalid!',
        });
      }
    });
};

export const LoginAutheintication = (username, password) => {
  auth()
    .signInWithEmailAndPassword(username, password)
    .then(() => {
      store.dispatch({type: 'change_signin'});
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        store.dispatch({
          type: 'update_error',
          payload: 'That email address is already in use!',
        });
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        store.dispatch({
          type: 'update_error',
          payload: 'That email address is invalid!',
        });
      }
    });
};
