import React, {createContext, useState} from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Context = createContext();

export const Provider = ({children}) => {
  



  return (
    <Context.Provider
      value={{
        
      }}>
      {children}
    </Context.Provider>
  );
};