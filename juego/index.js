// Componente principal del juego

class Juego extends React.Component {
    render() {
        return (
            <div className="juego">
                <div className="tablero">
                    <Tablero />
                </div>
            </div>
        );
    }
}



// Componente funcional para cada cuadrado del tablero

function Cuadrado(props) {
    return (
        <button className="cuadrado" onClick={props.onClick}>
            {props.value}
        </button>
    );
}



// Componente que representa el tablero completo

class Tablero extends React.Component {
    constructor(props) {
        super(props);

         // Estado inicial del tablero y jugador siguiente

        this.state = {
            cuadrados: Array(9).fill(null), // Array de 9 posiciones inicializado en null
            siguiente: true, // true = X, false = O
        }; 
    }



    // Método que se ejecuta al hacer clic en un cuadrado

    handleClick(i) {

        const cuadrados = this.state.cuadrados.slice(); // Copia del array para no cambiar el estado directamente


        // Si ya hay ganador o el cuadrado está ocupado, no hacer nada

        if (conocerGanador(cuadrados) || cuadrados[i]) {
            return;
        }


        // Asignar X o O según el jugador actual

        cuadrados[i] = this.state.siguiente ? 'X' : 'O';


        // Actualizar el estado con los nuevos valores

        this.setState({
            cuadrados: cuadrados,
            siguiente: !this.state.siguiente,
        });
    }



    // Método para renderizar un cuadrado específico

    dibujarCuadrado(i) {
        return (
            <Cuadrado
                value={this.state.cuadrados[i]} // Valor actual del cuadrado
                onClick={() => this.handleClick(i)} // Función que se ejecuta al hacer clic
            />
        );
    }




    render() {
        const ganador = conocerGanador(this.state.cuadrados); // Comprobar si hay ganador
       
        let info;


        // Mostrar información sobre el juego

        if (ganador) {
            info = 'Ganador: ' + ganador;
        } else {
            info = 'Siguiente jugador: ' + (this.state.siguiente ? 'Jugador X' : 'Jugador O');
        }

        return (
            <div>
                <div className="estado">{info}</div>
                <div className="tablero-fila">
                    {this.dibujarCuadrado(0)}
                    {this.dibujarCuadrado(1)}
                    {this.dibujarCuadrado(2)}
                </div>
                <div className="tablero-fila">
                    {this.dibujarCuadrado(3)}
                    {this.dibujarCuadrado(4)}
                    {this.dibujarCuadrado(5)}
                </div>
                <div className="tablero-fila">
                    {this.dibujarCuadrado(6)}
                    {this.dibujarCuadrado(7)}
                    {this.dibujarCuadrado(8)}
                </div>
            </div>
        );
    }
}




// Función para determinar ganador

function conocerGanador(cuadrados) {

    const lineas = [
        [0,1,2], [3,4,5], [6,7,8], // filas
        [0,3,6], [1,4,7], [2,5,8], // columnas
        [0,4,8], [2,4,6]           // diagonales
    ];


    // Revisar cada línea para ver si hay tres iguales


    for (let i = 0; i < lineas.length; i++) {
        const [a,b,c] = lineas[i];
        if (cuadrados[a] && cuadrados[a] === cuadrados[b] && cuadrados[a] === cuadrados[c]) {
            return cuadrados[a];
        }
    }

    return null; // No hay ganador
}



// Renderizar la app en el root

ReactDOM.createRoot(document.getElementById("root")).render(<Juego />);
