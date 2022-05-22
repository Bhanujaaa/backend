const mongoose = require('mongoose');
// console.log(process.env.MONGODB_URI)
// mongoose.connect("mongodb://localhost/projectdb", {
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });
const URI ="mongodb://localhost:27017/projectdb";

mongoose.connect(URI, {

useNewUrlParser: true, 

useUnifiedTopology: true 

}, err => {
if(err) throw err;
console.log('Connected to MongoDB!!!')
});