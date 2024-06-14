const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    id:String,
    email:String,
    password:String,
    fname:String,
    lname:String
})

const User = mongoose.model('users', userSchema)
module.exports = {User};