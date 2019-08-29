import React from 'react';
import './styles/styles.scss';
import Curso from './curso'

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
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      
  </div>
    

  </>

)

export default App;