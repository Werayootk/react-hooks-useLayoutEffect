import React, { useLayoutEffect, useEffect, useRef, useState } from "react";

const LayoutEffectCase2 = () => {
  const inputRef = useRef(null);
  const buttonRef = useRef();
  const [showText, setShowText] = useState("");
  
    useLayoutEffect(() => {
      console.log(inputRef.current.value);
    }, [showText]);
  
    useEffect(() => {
      inputRef.current.value = "New HELLO";
    }, [showText]);
  
  const toggleHandler = () => {
    setShowText("Click!");
  };
  
  return (
      <>      
      <div className="App">
        <input ref={inputRef} value="LayoutEffect!" style={{ width: 400, height: 60 }} />
      </div>
        <button ref={buttonRef} onClick={toggleHandler}>Click Here</button>
      </>
    );
}

export default LayoutEffectCase2;
