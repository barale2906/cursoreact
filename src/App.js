import React from 'react';
import './styles/styles.scss';
import Curso from './curso'

const cursos =[

  {
    "title":"Inicio de iglesia",
    "imagen":"https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-08/Especialidad%20Angular.png",
    "price":" 0 USD"
  },
  {
    "title":"Bautismo",
    "imagen":"https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-06/SEO%20y%20analitica%20web.png",
    "price":" 10 USD"
  },
  {
    "title":"Diaconado",
    "imagen":"https://drupal.ed.team/sites/default/files/2018-11/java-especialidad.jpg",
    "price":" 30 USD"
  }

]

const App = () => (

  <>
  <div className="main-banner img-container" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt="caramba" src="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Título del banner</p>
        <p> Subtítulo del banner</p>
        <a href="modulo.co" className="button">Botón del banner</a>
      </div>
    </div>
  </div>
</div>
  <div className="ed-grid m-grid-3">
      {
        cursos.map( curso => <Curso title={curso.title} imagen={curso.imagen} price={curso.price}  />)
      }    
  </div>
    

  </>

)

export default App;