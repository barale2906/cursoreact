import React, { Component } from "react"
import axios from "axios"



class Course extends Component {

    constructor(props){
        super(props)

        this.state ={
            cursoActual: {}
        }
    }

    componentDidMount() {
        axios.get(`https://my-json-server.typicode.com/barale2906/json-db/cursos/${this.props.match.params.id}`)
        
        .then(resp=> this.setState({
                    cursoActual: resp.data
            }))
        

          
    }

    render(){

        return (

            <div className="ed-grid m-grid-3">   
            { 
            this.state.cursoActual ? (
    
                <>
                        <h1 className="m-cols-1">Curso: { this.state.cursoActual.titulo }</h1>
                        <img className="m-cols-1" src={ this.state.cursoActual.image } alt={ this.state.cursoActual.titulo }/>
                        <p className="m-cols-2">Profesor { this.state.cursoActual.profesor }</p>
                </>
    
               
               ) : 
                    
                        <h1>El curso no existe</h1>
             
            }
            </div>        
            
        )

    }


    

    

}
    


export default Course