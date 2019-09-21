import React from "react"
import CourseGrid from "../organismos/CourseGrid"
import CoursesContext from "../Context/CoursesContext"



const Courses = () => (

    
        <CoursesContext.Consumer>
            { context => <CourseGrid courses={context.courses}/> }
        </CoursesContext.Consumer>
    
);

export default Courses