import React, { useState } from "react";

function PurpleLight() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Purple Button
      </button>
      {isVisible && <div>Purple Light</div>}
    </div>
  );
}

//This is a function and is currently unused


export default PurpleLight;
