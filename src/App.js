import React from 'react';
import './styles/styles.scss';
//import Curso from './curso'
import Banner from "./Banner"
import Formulario from "./Formulario"
import CourseGrid from "./CourseGrid"
import { BrowserRouter as Router, Route} from "react-router-dom"
import Course from "./Course"
import MainMenu from "./MainMenu"
import Historial from "./Historial"


const App = () => (

  <Router>

    <MainMenu />

      <switch>
          <Route path="/" exact component={ Banner }/>
          <Route path="/cursos/:id"  component={ Course }/>
          <Route path="/cursos"  component={ CourseGrid }/>
          <Route path="/historial/:id"  component={ Historial }/>
          <Route path="/historial"  component={ Historial }/>
          <Route path="/formulario"  component={ () => <Formulario name="Página de Contacto"/>}/>
          <Route component={()=>( <div className="ed-grid"><h1>Error 404</h1><span>Página no encontrada</span></div>)}/>
      </switch>


    
  </Router>

)

export default App;