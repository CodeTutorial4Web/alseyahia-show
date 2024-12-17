import { createContext, useReducer } from "react";
import App from "../App";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  userData: {
    accessToken:
      JSON.parse(sessionStorage.getItem("userData")) == null
        ? null
        : JSON.parse(sessionStorage.getItem("userData")).accessToken,
    user:
      JSON.parse(sessionStorage.getItem("userData")) == null
        ?
        null
        : JSON.parse(sessionStorage.getItem("userData")).user,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);


const AuthContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(
    AuthReducer,
    INITIAL_STATE

  );

  return (
    <AuthContext.Provider
      value={{
        userData: state.userData,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}

    </AuthContext.Provider>
  );
};


export default AuthContextProvider