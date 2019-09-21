import React from "react"
import CourseCard from "../moleculas/CourseCard"
//import withLoader from "../HOC/withLoader"

const CourseGrid = ({courses}) => (

    <div className="ed-grid m-grid-4">

            { 
            courses.map(cu => (
                <CourseCard 
                     key={cu.id}
                     id={cu.id}
                     title={cu.titulo}
                     image={cu.image}
                     price={cu.price}
                     professor={cu.professor}
 
                />)) 
             } 
            </div>

)

export default CourseGrid