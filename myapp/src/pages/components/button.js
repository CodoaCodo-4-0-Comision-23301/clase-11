export default function Button() {
    /* Si esto NO fuera JSX
    return React.createElement(
      'button',
      {  },
      'El Boton de ReactJS'
    );*/

    /* Esto es jsx */ 
    return (
      <button>Aceptar</button>,
      <button>Cancelar</button>
    );
  
}