import types from '../helpers/types';

const AuthReducer = (state = {}, action) => {
  const { type, payload } = action;
  console.log({ state, action });
  if (type === types.LOGIN_GOOGLE) {
    return {
      ...state,
      ...payload
    };
  }

  if (type === types.LOGOUT) {
    return console.log('Logout Successful');
  }

  return state;
};

export default AuthReducer;
