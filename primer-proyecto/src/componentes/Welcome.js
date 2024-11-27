import {useState, useEffect} from "react";

export default function Welcome(props) {
    const [semaforo, setSemaforo] = useState(false);
    const [counter, setCounter] = useState(0);
    const {Nombre} = props;

    useEffect (() => {
        console.log(semaforo);
    }, [semaforo]);

    const contar = () => {
        setCounter(counter + 1);
        setSemaforo(!semaforo);
    }

    return (
        <div>
            <h1>Bienvenido, {Nombre}</h1>
            <h2>Contador</h2>
            <h3>Numero del contador {counter}</h3>
            <p>El semaforo esta en color {semaforo ? "red" : "green"} </p>
                <button type="submit" onClick={contar}>
                    Sumar contador
                </button>
        </div>
    );
}