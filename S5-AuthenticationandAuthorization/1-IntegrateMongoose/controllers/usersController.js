const usersModel = require('../models/usersModel');
const bcrypt = require('bcrypt');
SALT_ROUNDS = Number(process.env.SALT_ROUNDS);

const registerUser = async (user) => {
    user.password = bcrypt.hashSync(user.password, SALT_ROUNDS);
    const dbUser = await usersModel.create(user); 
    dbUser.password = undefined;
    return dbUser;   
} 

/*
SALT_ROUNDS
number of times the hashing algorithm is applied. 
More rounds mean more security but also more computational resource usage. 
cryptographic operations like hashing can be resource-intensive, depending on the complexity and rounds involved.

The number of rounds can be a configurable parameter, ideally stored in environment variables (ENV).
*/


const loginUser = async (email, password) => {
    const dbUser = await usersModel.findOne({email});
    if(!dbUser){
        throw new Error("User not found");
    }
    // const isSamePassword = dbUser.password == bcrypt.hashSync(password,SALT_ROUNDS); 
    // same input might have different hash value so this way of password comparison might be wrong since the onus of hashing 
    // the password lies with bcrypt similarly comparison of the user password should also
    // lie with bcrypt ---> different method for comaprison bcrypt.compare()

    const isSamePassword = await bcrypt.compare(password, dbUser.password);

    if(!isSamePassword){
        throw new Error("Invalid Password");
    }

    return {user:{id: dbUser.id}};
} 
 

module.exports = {registerUser, loginUser};