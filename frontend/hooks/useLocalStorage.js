import { useState, React } from "react"

//Instructions provided did NOT tell me what to name the hook. Probably not even supposed to be there

const useLocalStorage = (key, intitalValue) => {
  const [data, setData] = useState(() => {
    if(localStorage.getItem(key)) { //true
      return (JSON.parse(localStorage.getItem(key)));
    }

    localStorage.setItem(key, JSON.stringify(intitalValue));
    return intitalValue
  })

  const storeData = (value) => {
    localStorage.setItem(key, JSON.stringify(value))
    setData(value)
  }

  return [data, storeData]
}

export default useLocalStorage