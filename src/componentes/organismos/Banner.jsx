import React from "react"

const Banner = () => (

    <div className="main-banner img-container" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="caramba" src="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png"/>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Cursos de Formación</p>
            <p>Vamos a la iglesia</p>
            <a href="modulo.co" className="button">Suscribete</a>
          </div>
        </div>
      </div>
    </div>

)

export default Banner