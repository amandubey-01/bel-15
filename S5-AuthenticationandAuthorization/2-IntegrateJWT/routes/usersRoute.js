const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController.js')
const jwt = require('jsonwebtoken');

// get all courses
// router.get("/", coursesController.getAllCourses);

//get a course by its id
// router.get("/:id", coursesController.getCourseById );


/* 
-------- See Me------------------

usersModel.create() returns a Promise
const dbUser = usersModel.create(req.body);   

does NOT immediately create the user.
It returns a Promise that will resolve later with the created user.
So at this moment:
console.log(dbUser);
Promise { <pending> }

*/

// router.post('/register', (req,res) => {
//     const dbUser = usersModel.create(req.body); ---> asynchronous call

//     res.send({dbUser});
// });--------> This sends a pending Promise back to the client — not the created user.
//-----> The user is not even saved by the time res.send() runs.

// router.post('/register', (req,res) => {  
//     usersModel.create(req.body) 
//         .then(dbUser => {  -------> This works, it would be better if we use async/await----> cleaner, no promise chain
//             res.send({dbUser});     chaining, easier error handling, readable synchronous-style flow
//         })
//         .catch(err => {
//             console.log(err)
//         });
// });
 

router.post('/login', async (req, res) =>{
    const {email, password} = req.body;

    try{
        const dbUser = await usersController.loginUser(email,password);

        const payload ={ // We want the payload in jwt as a payload. To do this we have to sign this payload using a
            id: dbUser._id, // secret key
            name: dbUser.name,
            role: dbUser.role,
            dbUser: dbUser.email
        }
        
        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'})

        res.status(200).send({token});
    }catch(err){
        console.log(err)
        res.status(500).send(err);  
    }   
})



router.post('/register', async (req, res) =>{
    const user = req.body;
    try{
        const dbUser = await usersController.registerUser(user);
        res.status(201).send({dbUser});
    }catch(err){
        console.log(err)
        res.status(500).send(err);  
    }
})

module.exports = router;    