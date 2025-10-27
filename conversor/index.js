// Componente principal de la aplicación

class App extends React.Component {
    constructor(props) {
        super(props); // Llama al constructor de React.Component

        // Estado inicial de la app: grados Celsius y Fahrenheit
        this.state = {
            grados: 0,
            farenheit: 32,
        };
    }




     // Método para convertir entre Celsius y Fahrenheit

    convertir(temperatura, valor) {

        // Convertir el input a número

        const numero = Number(valor); 
        

        // Si se actualizan los grados Celsius, recalcular Fahrenheit

        if (temperatura === "grado") {            
            this.setState({
                grados: numero,
                farenheit: numero * 9/5 + 32
            });
        }



        // Si se actualizan los grados Fahrenheit, recalcular Celsius

        if (temperatura === "farenheit") {
            this.setState({
                farenheit: numero,
                grados: (numero - 32) * 5/9
            });
        }
    }



    // Método render para mostrar la interfaz con una tabla

    render() {
        return (
            <div className="App">
                <table>
                    <thead>
                        <tr>
                            <td>Grados Celsius</td>
                            <td>Grados Fahrenheit</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Temperatura
                                    temperatura="grado"
                                    value={this.state.grados}
                                    convertir={(t, v) => this.convertir(t, v)}
                                />
                            </td>
                            <td>
                                <Temperatura
                                    temperatura="farenheit"
                                    value={this.state.farenheit}
                                    convertir={(t, v) => this.convertir(t, v)}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}



// Componente para los inputs de temperatura

class Temperatura extends React.Component {

    // Llamar a la función pasada por props para actualizar el estado del padre, capturar el valor que el usuario escribe o selecciona y hacer algo con él (por ejemplo, actualizar el estado del padre)

    handleChange(evt) {
        this.props.convertir(this.props.temperatura, evt.target.value);
    }


    // Input numérico vinculado al valor del estado y al evento onChange (evento que se dispara cada vez que el usuario escribe algo o selecciona algo.)

    render() {
        return (
            <input
                type="number"
                value={this.props.value}
                onChange={this.handleChange.bind(this)}
            />
        );
    }
}


// Renderizar la app en el div con id "root"
ReactDOM.createRoot(document.getElementById("root")).render(<App />);