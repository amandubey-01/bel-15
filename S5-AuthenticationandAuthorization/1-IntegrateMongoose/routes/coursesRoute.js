const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController.js')

// get all courses
router.get("/", coursesController.getAllCourses);

//get a course by its id
router.get("/:id", coursesController.getCourseById );


router.post('/', coursesController.createCourse);

module.exports = router;

// /api/v1/courses ----> This is repeated over and over and this violates the DRY principles, try to sort it if possible.

/*
The request are coming to route --- and goes to models.
In classical terms the responsibility of the router is to just map the api end point to a handler.
The business logic should not reside in the route.
It should be in different layer -- Controller.

*/