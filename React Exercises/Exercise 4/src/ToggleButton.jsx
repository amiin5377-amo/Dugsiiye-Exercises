import { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);  

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    < > <button onClick={toggle}>
  Turn    {isOn ? "Off" : "On"}
    </button>
    <p>{isOn ? "The button is On" : "The button is Off"}</p>
     </>
    
  );
}
export default ToggleButton;