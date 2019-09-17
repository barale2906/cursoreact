import React, { Component } from "react"

const withLoader = (propValue) => (WrappedComponent) => {
    return class withLoader extends Component {

        constructor(props) {
            super(props)
        }
        render() {
            
            // return this.props.courses.length === 0 // Esta nomenclatura funciona pero se limita a los valores del props unicamente
            return this.props[propValue].length === 0 // usando esta podemos hacerle llegar datos adicionales a través del stream.
            ? <h1>Cargando... </h1>
            : <WrappedComponent {...this.props}/>
        }

    }
}

export default withLoader