import { useState , React} from "react"

 
const useDarkMode = (initialValue) => {
  const [boolean, setBoolean] = useState(initialValue)
  const changeBoolean = (value) => {
    setBoolean(!boolean)
  }
  return [boolean, changeBoolean]
}


export default useDarkMode