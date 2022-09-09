const {Schema, model} = require('../connection');

//Here we define the structure of model
const myschema = new Schema({
    username : String,
    email : String,
    password : String,
    age : Number
})

//Here we are creating model
module.exports = model('users', myschema);