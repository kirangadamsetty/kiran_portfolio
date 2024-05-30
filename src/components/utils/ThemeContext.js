import {useState , createContext} from "react"

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) =>{
    const [theme, setTheme ] = useState(false)

  const valued = {
    theme , 
    setTheme
  }
  
    return(
        <ThemeContext.Provider value = {valued}>
            {children}
        </ThemeContext.Provider>
    )

}
export default ThemeContextProvider




