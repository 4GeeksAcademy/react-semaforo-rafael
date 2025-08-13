
//create your first component

import React, { useState } from "react";
import TrafficLight from "./TrafficLight";

const Home = () => {
	
	return (
		<div className="trafic-container">
		<TrafficLight/>
		</div>
	);
};

export default Home;
