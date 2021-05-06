const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			temperatura: null,
			pais: null,
			estado: null,
			nombre: null,
			condicion: null,
			icono: null,
			render: false,
			mensaje: "error"
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getWheater: async e => {
				e.preventDefault();

				const { city, country } = e.target.elements;
				const cityValue = city.value;
				const countryValue = country.value;

				const Swal = require("sweetalert2");

				if (cityValue == "") {
					Swal.fire("Put at least a city name");
				} else {
					const apiUrl = `http://api.weatherapi.com/v1/current.json?key=8e4f4c6b5236404e9c2213524210305&q=${cityValue} ${countryValue}lang=fr`;

					const response = await fetch(apiUrl);
					const data = await response.json();

					setStore({ temperatura: data.current.temp_c });
					setStore({ pais: data.location.country });
					setStore({ estado: data.location.region });
					setStore({ nombre: data.location.name });
					setStore({ condicion: data.current.condition.text });
					setStore({ icono: data.current.condition.icon });
					setStore({ render: true });
				}
			}
		}
	};
};

export default getState;
