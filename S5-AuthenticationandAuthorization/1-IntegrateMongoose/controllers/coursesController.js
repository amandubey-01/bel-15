const courses = require('../models/coursesModel.js');

const getAllCourses = (req,res)=>{    
    req.data = courses;
    res.send(courses);
}

const getCourseById = (req,res)=>{ 
    console.log(req.params);
    const id = req.params.id;
    const course = courses.find((course)=> course.id === parseInt(id))
    if(!course){
        return res.status(404).send("The course with the given id was not found");
    }
    req.data = course;
    res.send(course);
}

const createCourse = (req,res)=>{
    const course = req.body;
    course.id = courses.length + 1;
    courses.push(course);
    res.send(course);
}

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse
}

/*
Now we have moved from two layered approach to three layered/tier approach
, we have a router to handle a business logic, controller to control the
business logic, and models which stores the data.
It is clear cut defined responsibilities. ----> Separation of concers.

*/