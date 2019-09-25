import React, { useContext } from "react"
import CourseGrid from "../organismos/CourseGrid"
import CoursesContext from "../Context/CoursesContext"



const Courses = () => {

    const { courses } = useContext(CoursesContext)

    return(
        
        
            <CourseGrid courses={courses}/>
        
    )
};

export default Courses