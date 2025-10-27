// Crear la clase Reloj que extiende React.Component
class Reloj extends React.Component {

    // Definir el constructor para inicializar el state
    constructor(props) {
        // Llamar al constructor de la clase padre
        super(props);
        // Inicializar el state con la fecha actual
        this.state = {
            fecha: new Date()
        };
    }

    // Ejecutar código al montar el componente
    componentDidMount() {
        // Crear un intervalo que llame al método tick cada segundo
        this.timeID = setInterval(() => this.tick(), 1000);
    }

    // Ejecutar código al desmontar el componente
    componentWillUnmount() {
        // Limpiar el intervalo para evitar errores
        clearInterval(this.timeID);
    }

    // Actualizar el state con la nueva fecha
    tick() {
        // Llamar a setState para actualizar la fecha
        this.setState({
            fecha: new Date()
        });
    }

    // Renderizar el componente en el DOM
    render() {
        // Devolver el JSX que se va a mostrar y mostrar título y hora
        return (
            <div>
                <h1>Reloj</h1> 
                <p>Son las {this.state.fecha.toLocaleTimeString()}</p>  
            </div>
        );
    }

}

// Crear la raíz de React apuntando al div con id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
// Renderizar el componente Reloj dentro de la raíz
root.render(<Reloj />);
