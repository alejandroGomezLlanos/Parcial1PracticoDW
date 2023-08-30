import {useState} from "react";
import PropTypes from "prop-types"

function MyApp3({nombre,value}) {
	//set, uso 2 por tener 2 estados
	const [counter, setCounter] = useState(value);
	const [name, setName] = useState(nombre);

	//funcion
	const saludo = (nombre,hora) => {
		if(hora < 0){
		console.log("No existen horas negativas");
		}else if(hora <= 12){
		console.log("Buenos dias: " + nombre);
		}else if(hora <= 17){
		console.log("Buenos tardes: " + nombre);
		}else if(hora <=24){
		console.log("Buenos noches: " + nombre);
		}else {
		console.log("Las horas no estan en formato 24 horas")
		}	
	}

	return(
	<>
	<h2> Buenas "dias/tardes/noches" "Nombre"  </h2>
	<input
        type="text"
        placeholder="Escribe su nombre aqui"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
	<input
        type="text"
        placeholder="Hora aqui, formato 24 horas"
        value={counter}
        onChange={(e2) => setCounter(e2.target.value)}
      />
	<button onClick={ () => saludo(name,counter) } > Saludo </button>
	</>
	);
}
MyApp3.propTypes = {
	nombre: PropTypes.string.isRequired,
	hora: PropTypes.number.isRequired
}

MyApp3.defaultProps = {
	nombre: "",
	hora: 1
}
export default MyApp3;