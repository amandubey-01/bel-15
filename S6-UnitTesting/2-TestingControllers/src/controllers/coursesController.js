const courses = require('../models/coursesModel.js');



const getAllCourses = () => {    

    return courses.find();
}

const getAcourse = (courseId)=>{ 
    const course = courses.findById(parseInt(courseId));
    return course;
}

const createACourse = (course)=>{

    return courses.create(course);
}

module.exports = {
    getAllCourses,
    getAcourse,
    createACourse
}

/*
Now we have moved from two layered approach to three layered/tier approach
, we have a router to handle a business logic, controller to control the
business logic, and models which stores the data.
It is clear cut defined responsibilities. ----> Separation of concers.

*/