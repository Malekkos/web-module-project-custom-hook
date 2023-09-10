import { useState , React} from "react"
import useLocalStorage from "./useLocalStorage"
 
const useDarkMode = (initialValue) => {
  const [boolean, setBoolean] = useLocalStorage("darkMode", initialValue)
  const changeBoolean = (value) => {
    setBoolean(!boolean)
  }
  return [boolean, changeBoolean]
}


export default useDarkMode