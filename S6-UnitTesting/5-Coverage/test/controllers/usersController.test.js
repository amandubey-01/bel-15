const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const usersModel = require('../../src/models/usersModel')
const {MongoMemoryServer} = require('mongodb-memory-server');
const { registerUser, loginUser } = require('../../src/controllers/usersController');

// Before we run any of the tests, we need this mongodb server up and running.
// For this purpose hooks comes into picutre
// 4 different types of hooks --> 1. beforeAll, beforeEach, afterAll, afterEach

let mongoServer; // variable to keep the mongodb server

beforeAll (async () => { //-----> beforeAll hook
    mongoServer = await MongoMemoryServer.create(); // doesn't need any parameters as we are not connecting to anything
                                                    // not opening on port, just there in memory.     
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
})

beforeEach (async () => {
    // clear the database before each database
    await usersModel.deleteMany({})
})

afterAll (async () => { //-----> afterAll hook
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
})

describe('User Authentication Tests', () =>{
    it("Should Register new User successfully with all fields", async () => {
        const user = {
            name: "John Doe",
            email: "test@example.com",
            password: "password123"
        };

        const dbUser = await registerUser(user);
    

        expect(dbUser).toHaveProperty("_id");
        expect(dbUser.name).toBe(user.name);
        expect(dbUser.role).toBe("user");
        // Correct password check
        const isMatch = bcrypt.compareSync(user.password, dbUser.password);
        console.log(isMatch);
        expect(isMatch).toBe(true);
    })

    it('should throw error if email already in use', async() => {
        const user1 = {
            name: "John Doe",
            email: "duplicate@example.com",
            password: "password123",
            role: "user"

        };
        const user2 = {
            name: "John Doe",
            email: "duplicate@example.com",
            password: "password123",
            role: "admin"
        };
        // register user1
        await registerUser(user1);
        await expect(registerUser(user2)).rejects.toThrow("E11000 duplicate key error collection");
    })

})

describe("User Login", () => {
    test("should return an error when the user is not found", async () => {
        const email = "nonexistent@example.com";
        const password = "password123";

        await expect(loginUser(email, password)).rejects.toThrow("User not found"); 
    });

    test("should return an error when the password is wrong", async () => {
        const user = {
            name: "John Doe",
            email: "test@example.com",
            password: "password123",
            role: "user"

        };

        // Register user first to have them in the DB
        await registerUser(user);

        const wrongPassword = "wrongPassword";

        await expect(loginUser(user.email, wrongPassword)).rejects.toThrow("Invalid Password"); 
    });     
})