
//// Declara una clase llamada App que extiende React.Component (tiene estado y render)

class App extends React.Component {
    constructor(props) {  // Constructor de la clase, recibe props
        super(props); // Llama al constructor de React.Component
        this.state = {contador: 0};  // Inicializa el estado con contador en 0
    }


    // Método obligatorio que devuelve lo que se va a mostrar en pantalla

    render() {
        return (

            // Devuelve un contenedor div con los componentes hijos
            <div>

                <Contador contador = {this.state.contador} />
                <BotonIncrementar contador = {this.state.contador} 
                    incrementar={(nuevoContador) => this.setState({ contador: nuevoContador })} />
                <BotonDecrementar contador = {this.state.contador} 
                    decrementar={(nuevoContador) => this.setState({ contador: nuevoContador })} />
            </div>

        );

        /*  <Contador contador = {this.state.contador} />  Muestra el componente Contador con el valor actual del estado "contador".
         *  BotonIncrementar contador Muestra un botón que al pulsarlo aumenta el contador y actualiza el estado de App.
         *  Muestra un botón  que al pulsarlo disminuye el contador y actualiza el estado de App.
         */
    } 

}



// Componente funcional Contador que recibe la prop contador

const Contador = ({contador}) => {

    // Muestra el texto "Contador actual" y el valor del contador
    return (
        <div className = 'contador' > Contador actual: {contador} </div> 
    )
}



// Botones para incrementar y reducir

const BotonIncrementar = ({contador, incrementar}) => {
    return (
        <button onClick = { () => incrementar (contador + 1) }>+</button>
    )
}


const BotonDecrementar = ({contador, decrementar}) => {
    return (
        <button onClick = { () => decrementar (contador - 1) }>-</button>
    )
}



// Renderiza el componente App dentro del div con id "root"
ReactDOM.render(<App />, document.getElementById("root"));
