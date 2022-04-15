import React, { createContext, useState } from 'react'

const AppContext = createContext(null)

const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    }
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export { AppContext, AppProvider }
