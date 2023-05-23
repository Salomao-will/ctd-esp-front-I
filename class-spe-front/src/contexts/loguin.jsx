/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const LoguinContext = createContext()

export const LoguinProvider = (props) => {

  const [login, setLogin] = useState('')
  const isLogged = false

  function signUp() {
    if (isLogged) {
      setLogin(login)
    }
  }

  return (
    <LoguinContext.Provider value={{ login, signUp }}>
      {props.children}
    </LoguinContext.Provider>
  )
}

export const useLoguin = () => {

  const context = useContext(LoguinContext)

  return context;
}

