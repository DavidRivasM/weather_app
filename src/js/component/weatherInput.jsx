import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/info.scss";

export const WeatherInfo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="justify-content-center">
			<form onSubmit={actions.getWheater}>
				<div className="form-group ">
					<label>City name</label>
					<input type="text" name="city" className="form-control text-center" id="InputCity" />
					<small id="cityHelp" className="form-text text-muted">
						¡Enter the name of any city in the world!
					</small>
					<br />
					<label>Country name</label>
					<input type="text" name="country" className="form-control text-center" id="InputCity" />
					<small id="countrylHelp" className="form-text text-muted">
						¡Enter the name of any country in the world!
					</small>
				</div>
				<button id="boton" className="btn btn-primary">
					Get the weather
				</button>
			</form>
		</div>
	);
};
export default WeatherInfo;
