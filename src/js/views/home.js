import React from "react";
import "../../styles/home.scss";
import WeatherInfo from "../component/weatherInfo.jsx";
import WeatherInput from "../component/weatherInput.jsx";

// ES6 Modules or TypeScript
import Swal from "sweetalert2";

// CommonJS
export const Home = () => (
	<div className="container text-center">
		<h1 data-text="Wheather app">Weather app</h1> <div className="bg" />
		<div className="bg bg2" />
		<div className="bg bg3" />
		<div className="content" />
		<>
			<WeatherInput />
		</>
		<br />
		<>
			<WeatherInfo />
		</>
	</div>
);
