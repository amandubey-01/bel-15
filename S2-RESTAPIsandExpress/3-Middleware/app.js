const express = require('express');

const app = express();

const globalLogger = (req,res,next)=>{
    console.log(`${req.method}: Request recieved on ${req.url}`);
    next();
};

const globalLogger2 = (req,res,next)=>{
    console.log(`${req.method}: Request recieved on ${req.url}---via global logger 2`);
    next();
};

app.use(globalLogger);
// app.use([globalLogger,globalLogger2]); This also works

const courses = [
    {id:1, name:"Learn ReactJS", price: 299},
    {id:2, name:"Learn Angular", price: 399},
    {id:3, name:"Learn VueJS", price: 499},
];

// get all courses
app.get("/api/v1/courses",(req,res)=>{    // "/api/v1/courses",[globalLogger] ,(req,res) violating DRY
    // console.log(`${req.method}: Request recieved on ${req.url}`) -----> Violating DRY
    //globalLogger(req); this is better  ----> still violates DRY
    res.send(courses);
});

//get a course by its id
app.get("/api/v1/courses/:id", (req,res)=>{ //"/api/v1/courses/:id",[globalLogger, globalLogger2], (req,res) violating DRY
    //console.log(`${req.method}: Request recieved on ${req.url}`) -----> Violating DRY
    //globalLogger(req); this is better  ----> still violates DRY
    const id = req.params.id;
    const course = courses.find((course)=> course.id === parseInt(id))
    if(!course){
        return res.status(404).send("The course with the given id was not found");
    }
    res.send(course);
});

app.get('/',(req,res)=>{
    //console.log(`${req.method}: Request recieved on ${req.url}`)  -----> Violating DRY
    //globalLogger(req); this is better  ----> still violates DRY
    res.send("Hello World!")
});



app.listen(3000,()=>{
    console.log("Server is running on Port 3000");
});