import React from "react"
import CourseCard from './CourseCard'

const courses = [
    {
             
        "id":1,
        "titulo": "React desde cero",
        "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desarrollo%20frotend.png",
        "price": 40,
        "professor":"Beto Quiroga"
        
       
    },
    {
             
        "id":2,
        "titulo": "typescript",
        "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-08/typescript.png",
        "price": 150,
        "professor":"Luis Aviles"
    
   
    },
    {
             
        "id":3,
        "titulo": "Firebase",
        "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/firebase-android.png",
        "price": 15,
        "professor":"Juan Guillo"
    
   
    },
    {
             
        "id":4,
        "titulo": "Seo desde cero",
        "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-06/Seo%20desde%20cero.png",
        "price": 55,
        "professor":"Martin Tin"
    
   
    }

]

const CourseGrid = () => (

    <div className="ed-grid m-grid-4">
           { courses.map(c => (
               <CourseCard 
                    key={c.id}
                    id={c.id}
                    title={c.titulo}
                    image={c.image}
                    price={c.price}
                    professor={c.professor}

               />  
            ))} 
    </div>

)

export default CourseGrid