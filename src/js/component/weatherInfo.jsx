import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/info.scss";
// ES6 Modules or TypeScript
import Swal from "sweetalert2/dist/sweetalert2.js";
export const WeatherInput = () => {
	const { store, actions } = useContext(Context);

	const Swal = require("sweetalert2");

	const renderPart = () => {
		if (store.render == false) {
			return;

			<p />;
		} else {
			return (
				<div className="row">
					<div id="infoCard" className="card">
						<img id="imageInfo" src={store.icono} className="card-img-top" alt="..." />
						<div className="card-body">
							<p className="card-text">
								The consulted zone called {store.nombre} which is part of {store.estado} of the country{" "}
								{store.pais}, has a temperature of {store.temperatura} grades centrigrates and in this
								moment it´s weather is {store.condicion}.
							</p>
						</div>
					</div>
				</div>
			);
		}
	};

	return <>{renderPart()}</>;
};
export default WeatherInput;
