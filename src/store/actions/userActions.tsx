import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import userReducer from '../reducers/userReducer';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const userLoginSuccess = (user: any) => ({
  type: USER_LOGIN_SUCCESS,
  user: userReducer,
});

export const USER_LOGOUT = 'USER_LOGOUT';
export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const tryLogin = ({ email, password }: { email: string, password: string }) => (dispatch: any) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(user => {
      dispatch(userLoginSuccess(user));
      return user;
    })
    .catch(error => {
      return Promise.reject(error);
    });
};