import React,  { useState }  from "react";
import '../../styles/trafficLight.css'
import PurpleLight from "./PurpleLight";


const TrafficLight = () => {
    const [chosenColor, setChosenColor] = useState("selected")
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

    return (
    <>
    <div className="stem"></div>
    <div className="traffic-light-body">
            <div className={
                    chosenColor === "red" ? "red selected" : "red"
                    }
                    onClick={() => setChosenColor("red")}
            ></div>
            <div className={
                    chosenColor === "yellow" ? "yellow selected" : "yellow"
                    }
                    onClick={() => setChosenColor("yellow")}
            ></div>
            <div className={
                    chosenColor === "green" ? "green selected" : "green"
                    }
                    onClick={() => setChosenColor("green")}
            ></div>
    </div>
    <div className="PurpleLight">
    {isVisible && (<div className="HiddenBlock">
            <div className={
                    chosenColor === "purple" ? "purple selected" : "purple"
                    }
                    onClick={() => setChosenColor("purple")}
                    >
            </div>
        </div>)}
      <button id="purpleButton" onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Purple Light
      </button>
    </div>
    </>
    )
}

export default TrafficLight;