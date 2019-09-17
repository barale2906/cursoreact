import React from 'react'

function withLogin(WrappedComponent){

    return class WithLoginComponent extends React.component {

            constructor(props){
                super(props)

                this.state = { loggued: false }
                this.verifyUserLogin = this.verifyUserLogin.bind(this)
            }

           verifyUserLogin(){  // Verifica que el usuario este logueado

                // se recibe un token de backend para verificar, aquí se simula dicha situación

                setTimeout(() => {
                    const loggued = Math.round(Math.random())
                    this.setState({ loggued: loggued === 1}) // cuandoi se igual a 1 simulará la conexion
                })

           } 

           componentDidMount (){
               this.verifyUserLogin()
           }

       render(){

        return(
            <WrappedComponent {...this.props}
            loggued={this.state.loggued}/>
            

        )

       }     

    }

}

export default withLogin