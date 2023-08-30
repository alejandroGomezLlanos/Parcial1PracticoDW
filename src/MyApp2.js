import {useState} from "react";
import PropTypes from "prop-types"

function MyApp2({value}) {
	//use state
	const [counter, setCounter] = useState(value);

	//funciones
	const cobroLlamada = (minutos) => {
		let cobro;
		if(minutos <= 3){
		cobro = 100;
		}else{
		cobro = (50 *(minutos-3)) + 100;
		}

		//return horas;
		console.log("Su llamada de: " + minutos  + " minutos, se le cobra en: " + cobro);
	}

	return(
	<>
	<h2> Calculador de llamadas, 3min = 100 pesos, 1min adicional = 50 pesos extra </h2>
	<input
        type="text"
        placeholder="Escribe minutos a cobrar"
        value={counter}
        onChange={(e) => setCounter(e.target.value)}
      />
	<button onClick={ () => cobroLlamada(counter) } >Cobro llamada </button>
	</>
	);
}
MyApp2.propTypes = {
	value: PropTypes.number.isRequired
}

MyApp2.defaultProps = {
	value: ""
}

export default MyApp2;