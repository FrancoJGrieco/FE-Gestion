import axios from "axios"
import { createContext, useState } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export function AuthProvider({ children }) {


    return (
      <AuthContext.Provider value={{

      }}>
        {children}
      </AuthContext.Provider>
    )
}