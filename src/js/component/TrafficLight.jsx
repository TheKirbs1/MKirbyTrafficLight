import React,  { useState }  from "react";
import '../../styles/trafficLight.css'


const TrafficLight = () => {
    const [chosenColor, setChosenColor] = useState("selected")
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
    </>
    )
}

export default TrafficLight;