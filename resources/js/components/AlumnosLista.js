import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

class AlumnosLista extends Component {
    constructor(props){
        super(props);

        this.state={
            nombres: 'Milton',
            id_carrera_profesional: 1,
            anio_ingreso: '2020',
            _token: document.getElementById('csrf-token').value,
            lista: []
        }

        this.nombres = this.nombres.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getLista = this.getLista.bind(this);

        this.getLista();
    }

    nombres(event){
        this.setState({nombres : event.target.value});
    }

    getLista(){
        axios.get('/proyecto/public/alumnolista')
            .then(
                response => {
                        //alert(JSON.stringify(response.data)); 
                        this.setState({lista : response.data});
                        //this.state.lista = response.data
                        console.log("La lista")
                        console.log(this.state.lista)
                    }
                )
            .catch(error => {
                console.log("ERROR:: ",error.response.data);
                
                });
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post('/proyecto/public/alumno', this.state)
            .then(
                response => {
                        alert(JSON.stringify(response.data)); 
                        this.getLista()
                    }
                )
            .catch(error => {
                console.log("ERROR:: ",error.response.data);
                
                });
    }

    render(){
        console.log("datos")
        console.log(this.state.lista)
        let d = this.state.lista.map( (dato) => {return (<div>Datos:{dato.nombres}</div>)})
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Hola: {this.state.nombres}</div>
    {this.props.name}
    **{this.state.nombres}
    {d}
                            <div className="card-body">IEnviar datos!</div>
                        </div>

                        <div className="card">
                            <div className="card-header">Hola: {this.state.nombres}</div>
                                <form>
                                    <textarea placeholder="Ingrese el nombre" onChange={this.nombres}></textarea>
                                    <input type="submit" className="btn" onClick={this.handleSubmit} value="Register"/>
                                </form>
                            <div className="card-body">IEnviar datos!</div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default AlumnosLista;