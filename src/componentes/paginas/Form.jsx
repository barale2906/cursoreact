import React, {Component} from "react"


class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {

            name:"",
            email:"",
            dates: new Date()
            
        }

        this.changeName = this.changeName.bind(this)
        this.changeemail = this.changeemail.bind(this)
        this.changedate = this.changedate.bind(this)
    }

    // usaremos el metodo setState para actualizar el campo 


    changeName (e){

            this.setState({
                    name: e.target.value
            })

    }
    changeemail (e){

        this.setState({
                email: e.target.value
        })

    }    
    changedate (){

        this.setState({
                dates: new Date()
        })    


    }

    render() {

        return (

            <div className="ed-grid">
                <h1>Formulario {this.props.name}</h1>
                <h4>Fecha actual: {Math.ceil(this.state.dates/1000)} </h4>
                <form id="form-element">

                        <div className="ed-grid m-grid-2">

                        
                            <div className="form__item">
                                <label >Nombre Completo</label>
                                <input type="text" onChange={this.changeName}/>
                                
                            </div>
                            <div className="form__item">
                                <label>Correo Electrónico</label>
                                <input type="email" onChange={this.changeemail}/>
                            </div>
                            <div className="form__item">
                                <input className="button full" type="submit" value="Enviar"/>
                            </div>
                        

                        </div>
                </form> 

                <div>
                    <h2>{`Hola ${this.state.name}`}</h2>
                    <span>{`Hola ${this.state.email}`}</span>
                </div>
            </div>
        )

            
        

    }

}

export default Form