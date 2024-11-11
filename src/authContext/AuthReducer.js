import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS } from './AuthTypes';


 const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        userData: {
          accessToken: null,
          user: null,
        },
        isFetching: true,
        error: false,
      };

    case LOGIN_SUCCESS:
      return {
        userData: {
          accessToken: action.payload.accessToken,
          user: action.payload.user,
        },
        isFetching: false,
        error: false,
      };

    case LOGIN_FAILURE:
      return {
        userData: {
          accessToken: null,
          user: null,
        },
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default AuthReducer