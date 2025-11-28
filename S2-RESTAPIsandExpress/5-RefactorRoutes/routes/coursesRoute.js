const express = require('express');
const router = express.Router();
const courses = require('../models/coursesModel.js');

// get all courses
router.get("/",(req,res)=>{    
    req.data = courses;
    res.send(courses);
});

//get a course by its id
router.get("/:id", (req,res)=>{ 
    console.log(req.params);
    const id = req.params.id;
    const course = courses.find((course)=> course.id === parseInt(id))
    if(!course){
        return res.status(404).send("The course with the given id was not found");
    }
    req.data = course;
    res.send(course);
});


router.post('/', (req,res, next)=>{
    const course = req.body;
    course.id = courses.length + 1;
    courses.push(course);
    res.send(course);
});

module.exports = router;

// /api/v1/courses ----> This is repeated over and over and this violates the DRY principles, try to sort it if possible.

/*
The request are coming to route --- and goes to models.
In classical terms the responsibility of the router is to just map the api end point to a handler.
The business logic should not reside in the route.
It should be in different layer -- Controller.

*/