import React, { useState, useEffect } from "react"
import axios from "axios"
import useCourse from "../CustomHooks/useCourse"



const Course = ({ match }) => {

    // al usestate se le puede pasar cualquier cosa, un objeto, un entero, un array, un string...
   
   const [comment, setComment] = useState("Sin Comentarios")

   const course = useCourse(match.params.id)

   const myComment = e =>{
       setComment(e.target.value)
   }
    
    return (

        <div className="ed-grid m-grid-3">   
        { 
        course ? (

            <>
                    <div className="l-block ">
                        <h1 className="m-cols-1">Curso: { course.titulo }</h1>
                        <img className="m-cols-1" src={ course.image } alt={ course.titulo }/>
                        <p className="m-cols-2">Profesor: { course.professor }</p>
                    </div>
                    <div>
                        <h2>Escribe tu comentario</h2>
                        
                        <input type="text" placeholder="Escribe..." onChange={myComment.bind(this)} />
                        <p>{comment}</p>
                    </div>
                   
            </>

           
           ) : 
                
                    <h1>El curso no existe</h1>
         
        }
        </div>        
        
    )

}
    

export default Course