import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

class DocentesLista extends Component {
    constructor(props){
        super(props);

        this.state={
            nombres_docente: 'Milton',
            escuela: 'Sistemas',
            anio_inicio: '2020',
            titulo: 'Ing Sistemas',
            lista: [],
        }

        this.nombres_docente = this.nombres_docente.bind(this);
        this.escuela = this.escuela.bind(this);
        this.anio_inicio = this.anio_inicio.bind(this);
        this.titulo = this.titulo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getLista = this.getLista.bind(this);

        this.getLista();
    }

    nombres_docente(event){
        this.setState({nombres_docente : event.target.value})
    }

    escuela(event){
        this.setState({escuela : event.target.value})
    }

    anio_inicio(event){
        this.setState({anio_inicio : event.target.value})
    }

    titulo(event){
        this.setState({titulo : event.target.value})
    }

    getLista(){
        axios.get('/proyecto/public/docentelista')
        .then(
            response => {
                    this.setState({lista : response.data})
                    alert(JSON.stringify(response.data)); 
                    console.log(this.lista)
                }
            )
        .catch(error => {
            console.log("ERROR:: ",error.response.data);
            
            });
    }

    handleSubmit(event){
        event.preventDefault();
        var request = {
            nombres_docente: this.state.nombres_docente,
            escuela: this.state.escuela,
            anio_inicio: this.state.anio_inicio,
            titulo: this.state.titulo,
        }
        axios.post('/proyecto/public/docente',request)
            .then(
                response => {
                        alert(JSON.stringify(response.data)); 
                        this.getLista();
                    }
                )
            .catch(error => {
                console.log("ERROR:: ",error.response.data);
                
                });
    }

    render(){
        let d = this.state.lista.map( (dato) => {return <div>{dato.nombres_docente}</div>})
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Hola: {this.state.nombres}</div>
    {this.state.nombres_docente}
    {d}
                            <div className="card-body">IEnviar datos!</div>
                        </div>

                        <div className="card">
                            <div className="card-header">Hola: {this.state.nombres}</div>
                                <form>
                                    <textarea placeholder="nombre del docente" onChange={this.nombres_docente}></textarea>
                                    <input type="text" placeholder="nombre de la escuela" onChange={this.escuela} />
                                    <input type="number" placeholder="año de inicio" onChange={this.anio_inicio} />
                                    <input type="text" placeholder="título" onChange={this.titulo} />
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

export default DocentesLista;