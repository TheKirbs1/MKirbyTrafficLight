import React, { useState } from "react";

function PurpleLight() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Div
      </button>
      {isVisible && <div>This is the hidden div.</div>}
    </div>
  );
}

export default PurpleLight;
