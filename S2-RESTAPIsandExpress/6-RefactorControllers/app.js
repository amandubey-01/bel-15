require('dotenv').config(); // This ideally should be the first line of your application
const express = require('express');
const logger = require('./middleware/loggerMiddleware.js');
const coursesRoute = require('./routes/coursesRoute.js');

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

app.listen(port,()=>{
    console.log("Server is running on Port 3000");
});