const express = require('express');

const app = express();

// Design Course Rating Applications
// - Get all courses: GET /api/v1/courses
// - Get a course by its id: GET /api/v1/course/:id

const courses = [
    {id:1, name:"Learn ReactJS", price: 299},
    {id:2, name:"Learn Angular", price: 399},
    {id:3, name:"Learn VueJS", price: 499},
];

// get all courses
app.get("/api/v1/courses",(req,res)=>{
    console.log(req.query);
    res.send(courses);
});

//get a course by its id
app.get("/api/v1/courses/:id", (req,res)=>{
    console.log(req.params)
    const id = req.params.id;
    const course = courses.find((course)=> course.id === parseInt(id))
    if(!course){
        return res.status(404).send("The course with the given id was not found");
    }
    res.send(course);
});

app.get('/',(req,res)=>{
    console.log(JSON.stringify(req.headers));
    res.send("Hello World!")
});



app.listen(3000,()=>{
    console.log("Server is running on Port 3000");
});