const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect("mongodb+srv://koonice32:1234@api-nodejs.1qgvmmr.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
  console.log("connect success");
}).catch((error)=>{
  console.log(error);

})

module.exports = mongoose;
