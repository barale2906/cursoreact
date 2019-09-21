import React from "react"
import CourseGrid from "../organismos/CourseGrid"
import { connect } from "react-redux"

const Courses = ({courses}) => < CourseGrid courses={courses}/>

const mapsStateToProps = state => ({
    courses: state.coursesReducer.courses
})

export default connect(mapsStateToProps,{})(Courses)