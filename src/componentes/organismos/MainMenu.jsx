import React from "react"
import { NavLink } from "react-router-dom"
import CartCounter from "../atomos/cartCounter"


const MainMenu = () => (

    <header className="main-header">
            <div className="ed-grid s-grid-5 lg-grid-4">
                <div className="s-cols-4 lg-cols-s-1 s-cross-center">
                    <img className="main-logo" src="https://ed.team/static/images/logo-premium.svg" alt="" />
                </div>
            </div>
            <div className="s-grid-1 lg-cols-s-3 s-cross-center s-main-end">
                <nav className="main-menu" id="main-menu">
                    <ul>
                            <li>><NavLink exact to="/" activeClassName="activo" >Inicio</NavLink></li>
                            <li>><NavLink to="/cursos" activeClassName="activo" >Cursos</NavLink></li>
                            <li>><NavLink to="/formulario" activeClassName="activo" >Formulario</NavLink></li>
                            <li>><NavLink to="/usuarios" activeClassName="activo" >Usuarios</NavLink></li>
                            <CartCounter/>
                            
                    </ul>
                </nav>
                <div className="main-menu-toggle to-l" id="main-menu-toggle" >

                </div>
            </div>
    </header>

)

export default MainMenu