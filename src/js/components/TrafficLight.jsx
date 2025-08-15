//Creo mi componente
import React, { useState } from "react";

// UTILIZO USESTATE PARA PODER MODIFICAR EL COLOR
const TrafficLight = () => {
	const colors = ["red", "yellow", "green"];
	const [color, setColor] = useState("red");

	const nextColor = () => {
		// ENCUENTRO EL COLOR ACTUAL CON FOR
		let currentIndex = -1;
		for (let i = 0; i < colors.length; i++) {
			if (colors[i] === color) {
				currentIndex = i;
				break;
			}
		}
		// CALCULO EL SGTE COLOR
		let nextIndex = currentIndex + 1;
		if (nextIndex >= colors.length) {
			nextIndex = 0;
		}
		// CAMBIO EL COLOR
		setColor(colors[nextIndex]);
	};

	// VARIABLES PARA CADA LUZ
	let redClass = "light red";
	let yellowClass = "light yellow";
	let greenClass = "light green";

	// SOLO ALUMBRA LA LUZ SELECCIONADA
	if (color === "red") redClass += " glow";
	if (color === "yellow") yellowClass += " glow";
	if (color === "green") greenClass += " glow";

	return (
		<div className="trafic-container">
			<div className="support"></div>
			<div className="trafic-light">
				<div
					className={redClass}
					onClick={() => setColor("red")}
				></div>
				<div
					className={yellowClass}
					onClick={() => setColor("yellow")}
				></div>
				<div
					className={greenClass}
					onClick={() => setColor("green")}
				></div>
			</div>

			<button className="button" onClick={nextColor}>
				Cambia color
			</button>
		</div>
	);
};

export default TrafficLight;
