import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

class CursosLista extends Component {
    constructor(props){
        super(props);

        this.state={
            nombre_curso: 'Programación II',
            ciclo: '3',
            creditos: '4',
            lista: [],
        }

        this.nombre_curso = this.nombre_curso.bind(this);
        this.ciclo = this.ciclo.bind(this);
        this.creditos = this.creditos.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getLista = this.getLista.bind(this);

        this.getLista()
    }

    nombre_curso(event){
        this.setState({nombre_curso : event.target.value})
    }

    ciclo(event){
        this.setState({ciclo : event.target.value})
    }

    creditos(event){
        this.setState({creditos : event.target.value})
    }

    getLista(){
        axios.get('/proyecto/public/cursolista')
        .then(
            response => {
                    alert(JSON.stringify(response.data)); 
                    this.setState({lista : response.data});
                }
            )
        .catch(error => {
            console.log("ERROR:: ",error.response.data);
            
            });
    }

    handleSubmit(event){
        event.preventDefault();
        var request = {
            nombre_curso: this.state.nombre_curso,
            ciclo: this.state.ciclo,
            creditos: this.state.creditos,
        }
        axios.post('/proyecto/public/curso', request )
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
        let d = this.state.lista.map( (dato) => {return (<div>Datos:{dato.nombre_curso}</div>)})
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Hola: {this.state.nombres}</div>
    {this.state.nombre_curso}
    {d}
                            <div className="card-body">IEnviar datos!</div>
                        </div>
m
                        <div className="card">
                            <div className="card-header">Hola: {this.state.nombres}</div>
                                <form>
                                    <textarea onChange={this.nombre_curso} placeholder="nombre curso"></textarea>
                                    <input type="number" onChange={this.ciclo} placeholder="ciclo"/>
                                    <input type="number" onChange={this.creditos} placeholder="creditos"/>
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

export default CursosLista;