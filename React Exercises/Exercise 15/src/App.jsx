import LanguageContext from "./LanguageContext"
import Greeting from "./Greeting"
import { useState } from "react"
function App() {
 const [language, setLanguage] = useState("en")
 const toggleLanguage = () => {
  setLanguage((prevLanguage)=> prevLanguage === "en" ? "es" : "en")
 }

  return (
    
    <LanguageContext.Provider value = {language}>
      <Greeting />

<button onClick={toggleLanguage}> Switch to {language === "en" ? "spanish" : "English"}</button>
    </LanguageContext.Provider>
      
    
  )
}

export default App
