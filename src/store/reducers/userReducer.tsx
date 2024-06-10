import { USER_LOGIN_SUCCESS, USER_LOGOUT } from '../actions/userActions';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return { ...state, user: action.user };
    case USER_LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default userReducer;
