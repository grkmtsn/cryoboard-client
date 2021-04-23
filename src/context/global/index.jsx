import React, { createContext, useReducer } from "react";
import globalReducer from "./reducer";

const initialState = {
  pageTitle: "",
};

export const GlobalContext = createContext(initialState);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const value = { state, dispatch };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default Store;
