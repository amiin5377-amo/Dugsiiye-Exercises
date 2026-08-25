import { useContext } from "react";
import LanguageContext from "./LanguageContext";

const Greeting = () => {
const language  = useContext(LanguageContext)
const welcome = {
    en : "hello",
    es : "hola"
}
    return (
        <>
<p>{welcome [language]}</p>
        </>
    )
}
export default Greeting;