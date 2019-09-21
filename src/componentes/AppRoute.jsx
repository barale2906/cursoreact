import React from "react"
import Form from "./paginas/Form"
import Courses from "./paginas/Courses"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Course from "./paginas/Course"
import MainMenu from "./organismos/MainMenu"
import History from "./paginas/History"
import Home from './paginas/home'
import Users from './paginas/Users'
import CoursesProvider from "./Context/CoursesProvider"


const AppRoutes = () => (
    <CoursesProvider>
        <Router>

            <MainMenu />

            <Switch>
                
                <Route path="/" exact component={ Home }/>
                <Route path="/cursos/:id"  component={ Course }/>
                <Route path="/cursos"  component={ Courses }/>
                <Route path="/historial/:id"  component={ History }/>
                <Route path="/historial"  component={ History }/>
                <Route path="/usuarios"  component={ Users }/>
                <Route path="/formulario"  component={ () => <Form name="Página de Contacto"/>}/>
                <Route component={()=>( <div className="ed-grid"><h1>Error 404</h1><span>Página no encontrada</span></div>)}/>
            </Switch>



        </Router>
    </CoursesProvider>
    


)

export default AppRoutes