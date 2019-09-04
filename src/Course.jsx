import React from "react"

const cursos = [
    {
             
        "id":1,
        "titulo": "React desde cero",
        "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desarrollo%20frotend.png",
        "price": 40,
        "profesor":"Beto Quiroga"
        
       
    },
    {
             
        "id":2,
        "titulo": "typescript",
        "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-08/typescript.png",
        "price": 150,
        "profesor":"Luis Aviles"
    
   
    },
    {
             
        "id":3,
        "titulo": "Firebase",
        "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/firebase-android.png",
        "price": 15,
        "profesor":"Juan Guillo"
    
   
    },
    {
             
        "id":4,
        "titulo": "Seo desde cero",
        "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-06/Seo%20desde%20cero.png",
        "price": 55,
        "profesor":"Martin Tin"
    
   
    }

]


const Course = ({ match }) => {

    const cursoActual = cursos.filter ( c => c.id === parseInt(match.params.id))[0]

    return (

        <div className="ed-grid m-grid-3">   
        { 
        cursoActual ? (

            <>
                    <h1 className="m-cols-1">Curso: { cursoActual.titulo }</h1>
                    <img className="m-cols-1" src={ cursoActual.image } alt={ cursoActual.titulo }/>
                    <p className="m-cols-2">Profesor { cursoActual.profesor }</p>
            </>

           
           ) : 
                
                    <h1>El curso no existe</h1>
         
        }
        </div>        
        
    )

}
    


export default Course