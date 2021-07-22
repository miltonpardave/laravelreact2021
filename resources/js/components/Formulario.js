import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

function Formulario(props) {
    console.log(props)
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Formulario de ingreso</div>
{props.name}
                        <div className="card-body">IEnviar datos!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Formulario;