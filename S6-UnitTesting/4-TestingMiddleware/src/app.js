require('dotenv').config(); // This ideally should be the first line of your application
const express = require('express');
const logger = require('./middleware/loggerMiddleware.js');
const coursesRoute = require('./routes/coursesRoute.js');
const usersRoute = require('./routes/usersRoute.js')
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(logger);
app.use("/api/v1/courses",coursesRoute); // 1. it is taken as a middleware
/*
2.  The order in which we define the middleware affects
their execution, so this is the order we want if we donot 
use the express.json and logger before the coursesRoute 
it will not be available to the routers.

3. Mounting of a route, app.use("/api/v1/courses", coursesRoute). The coursesRoute should be 
self contained, that it should now what to do when it get a request on '/'. It should be agnostic from the entity itself.
It should be app's responsibility to mount proper routes at proper places.

This makes our code much more readable and abstract.
*/
app.use("/api/v1/users",usersRoute);

app.get('/',(req,res)=>{
    res.send("Hello World!")
});

//console.log(process.env); 
/* It can be used anywhere where ever you want,this process is a global object, it is available across 
all the file, across all the modules in the application 
 all the 
*/
const port = process.env.PORT || 3000; /* ---> Hardcoding this is not advisable,anything which could change based on environments should ideally not
hardcoded. It could be port gateway, database credentials, S3 credentials.
Technically, these are called environment variables, it depedns on different environments and it should never ever be hardcoded 
in the code.
*/

// connection string shouldn't be hard coded --> moved to .env


// mongoose.connect(process.env.MONGODB_CONNECTION_STRING) // it require a connection string that we get from mongodb cluster
//     .then(() =>{
//     console.log("Connected to MongoDB");
//     }).catch(err => {
//         console.log("Connection error", err);
//     });

// app.listen(port,()=>{
//     console.log("Server is running on Port 3000");
// });

// The above is also right. But this is not reliable, as the db connection and port going live is independent, however
// service depends heavily on db so if service goes live earlier than the promise gets resolve all my api's will be available
// than if anyone make the calls to api they start failing as majority of them relies on database and they start failing.
// , that  will turn the service upside down. 

// So, we can make things better if we put the listen in chain after connection.

// Bootstrapping Stage:
/* 
Then why we do it why not to link upfront. 
We first set up all the dependencies, here it is mongoose as a dependencies, may be kafka, reddis as dependencies, we first
ensure that all the dependencies are up and running and at the very end app is started.

*/

// To make our app listen after our app is connected to database.
mongoose.connect(process.env.MONGODB_URI) // it require a connection string that we get from mongodb cluster
    .then(() =>{
    console.log("MongoDB started");
    app.listen(port,()=>{
        console.log(`Server is running on Port ${port}`);
    });
    }).catch(err => {
        console.log("Connection error", err);
});

// While placing the listen callback in then() works. But in real world sceanrio you might not have just one dependencies,
// you might have n numbero of dependencies. One way of doing this would be chaining dependencies one after the other
// and at the end start the app. However, that might slow down the bootstrapping.
// This is where the promise.all is used--------> Promise.all() 