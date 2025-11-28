const express = require('express');

const app = express();

app.use(express.json());
/*
Parses the body in JSON format attaches it to the req.body, by default there is no concept of req.body
It is the middleware that attaches this req.body 
*/

const logger = (req,res,next)=>{
    console.log(`${req.method}: Request recieved on ${req.url}`);
    next();
};

app.use(logger);

const courses = [
    {id:1, name:"Learn ReactJS", price: 299},
    {id:2, name:"Learn Angular", price: 399},
    {id:3, name:"Learn VueJS", price: 499},
];

// get all courses
app.get("/api/v1/courses",(req,res)=>{    
    req.data = courses;
    res.send(courses);
});

//get a course by its id
app.get("/api/v1/courses/:id", (req,res)=>{ 
    console.log(req.params);
    const id = req.params.id;
    const course = courses.find((course)=> course.id === parseInt(id))
    if(!course){
        return res.status(404).send("The course with the given id was not found");
    }
    req.data = course;
    res.send(course);
});

/*
Intent 3: Create a course with course details.

POST {prefix}/courses

Body:{
    id:
    ...
    ...
}


*/


app.post('/api/v1/courses', (req,res, next)=>{
    const course = req.body;
    course.id = courses.length + 1;

    courses.push(course);
    res.send(course);
});


app.get('/',(req,res)=>{
    res.send("Hello World!")
});

app.listen(3000,()=>{
    console.log("Server is running on Port 3000");
});