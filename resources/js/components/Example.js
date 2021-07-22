import React from 'react';
import ReactDOM from 'react-dom';
import Formulario from './Formulario';
import AlumnosLista from './AlumnosLista';
import CursosLista from './CursosLista';
import DocentesLista from './DocentesLista';

function Example(props) {
    console.log(props);
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>
                            Estás en el {props.name}
                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
            <div>
                <DocentesLista name="docentes"></DocentesLista>
            </div>
            <div>
                
            </div>
            
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
