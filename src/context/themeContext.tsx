import {createContext, ReactNode, useState} from 'react'

interface ContextState {
  isDarkTheme: boolean
  changeTheme: (dark: boolean) => void
}

const UiThemeContext = createContext({} as ContextState)

type Props = {
  children: ReactNode
}

const UiThemeProvider = (props: Props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const changeTheme = (dark: boolean) => {
    setIsDarkTheme(dark)
  }

  return (
    <UiThemeContext.Provider value={{isDarkTheme, changeTheme}}>
      {props.children}
    </UiThemeContext.Provider>
  )
}

export {UiThemeContext, UiThemeProvider}
