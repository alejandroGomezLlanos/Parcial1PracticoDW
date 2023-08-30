import {useState} from "react";
import PropTypes from "prop-types"

function MyApp({value}) {
	
	//use state
	const [counter, setCounter] = useState(value);

	//funciones
	const segAhoras = (segundos) => {
		let minutos = segundos/60;
		let horas = minutos/60;
		//return horas;
		console.log("Horas: " + horas + "\n" + "Minutos: " + minutos + "\n" + "Segundos: " + segundos);
	}

	return(
	<>
	<h2> Segundos a horas </h2>
	<input
        type="text"
        placeholder="Escribe segundos aqui"
        value={counter}
        onChange={(e) => setCounter(e.target.value)}
      />
	<button onClick={ () => segAhoras(counter) } > Segundos a horas </button>
	</>
	);
}
export default MyApp;