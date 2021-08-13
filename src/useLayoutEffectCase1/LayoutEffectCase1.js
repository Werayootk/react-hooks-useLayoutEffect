import React, { useLayoutEffect, useEffect, useRef } from "react";

const LayoutEffectCase1 = () => {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
      console.log(inputRef.current.value);
    }, []);
  
    useEffect(() => {
      inputRef.current.value = "HELLO";
    }, []);
  
    return (
      <div className="App">
        <input ref={inputRef} value="LayoutEffect!" style={{ width: 400, height: 60 }} />
      </div>
    );
}

export default LayoutEffectCase1;
