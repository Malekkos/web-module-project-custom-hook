import { useState , React} from "react"

 
const setDarkMode = (initialValue) => {
  const [boolean, setBoolean] = useState(initialValue)
  const changeBoolean = (value) => {
    setBoolean(!boolean)
  }
  return [boolean, changeBoolean]
}


export default setDarkMode