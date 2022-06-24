import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Stoplight = () => {
    const[color, setColor] = useState(null);

    return(
	<>
		<div className="hold bg-dark container d-grid justify-content-center"></div>
		<div className="container d-grid justify-content-center semaforo bg-dark">
			<div className={color === 'red' ? 'activeRed' : 'red'} onClick={()=> setColor(color === "red" ? "none" : "red")} ></div>
			<div className={color === 'yellow' ? 'activeYellow' : 'yellow'} onClick={()=> setColor(color === "yellow" ? "none" : "yellow")} ></div>
			<div className={color === 'green' ? 'activeGreen' : 'green'} onClick={()=> setColor(color === "green" ? "none" : "green")} ></div>
    	</div>
	</>
    )
}
export default Stoplight;