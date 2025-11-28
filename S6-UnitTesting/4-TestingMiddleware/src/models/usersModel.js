// This model will be backed by mongoose.

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ // basically a function takes schema as a parameter, basically a json object
    name:{
        type: "string",
        required: true, // required is a validation thing, a user should have name, mongoose role to validate it.
        trim: true // remove white space from both the sides.
    },
    email:{
        type: "string",
        required: true,
        trim: true,
        unique: true // email should be unique, mongoose will ensure same email shouldn't be twice
    },
    password:{
        type: "string",
        required: true
    },
    role:{
        type: "string",
        enum: ["user", "admin"], // not required, but if someone passes a role --> it should be either a user or a admin
        default: "user" // if nothing is passed it is a user
    }
})
// to know additional validation we can go to mongoose library
// we can write custom function that can manage some entirely complicated logic.

module.exports = mongoose.model("User", userSchema);    

/*
Why we need this mongoose.model, Why can't we simply export userSchema

Why can't we just export userSchema?
- Because a schema is NOT a collection.
- It is only a blueprint.

A schema:
- defines structure (name, email, password…)
- defines rules
- defines validation
- does not let you interact with MongoDB

A schema cannot do:
    User.find()
    User.create()
    User.updateOne()
    User.deleteOne()

So what does mongoose.model() do?
mongoose.model() converts your schema into a Model.
Think of a Model as a Class that:
    ✔ Represents a MongoDB collection
    ✔ Allows reading/writing
    ✔ Creates documents using your schema
    ✔ Gives CRUD APIs
Concept	      Real-world analogy
Schema	      Blueprint of a house
Model	      Actual building company that builds houses
Document	 The final built house

Enum constants in the context of MongoDB and JavaScript refer to predefined values that you define and enforce in your 
application to maintain data consistency.
*/
