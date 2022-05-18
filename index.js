// require('dotenv').config();
// const express=require('express');
// const path=require('path');
// const passport = require('passport');
// const cors=require('cors');
// const bodyParse=require('body-parser');
// const mongoose=require('mongoose')
// const app=express()

// app.use(cors())
// app.use(express.json())
// app.use(bodyParse.urlencoded({ extended: false }));
// const normalroutes=require('./routes/showtime.js')
// app.use('/', normalroutes);
// const userRouters=require('./routes/UserRoute.js')
// app.use('/users',userRouters)
// app.use(passport.initialize());
// require('./routes/passport.js')
// require('./auth/auth.js');
// const port=process.env.PORT || 3000
// app.get('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
//     res.send('hello world')
// })
// // app.use(function(err, req, res, next) {
// //     res.status(err.status || 500);
// //     res.json({ error: err.message });
// //   });
// mongoose.connect(process.env.MONGODB,{useUnifiedTopology:true,useNewUrlParser:true,})
// .then(()=>{
//     app.listen(port,()=>{       
//     console.log('app running')
// })

// }).catch(err=>console.log(err))


const express = require('express');
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: path.join(__dirname, '../.env') });
}

require('./db/mongoose');

// Routes
const userRouter = require('./routes/users');
const movieRouter = require('./routes/movies');
const cinemaRouter = require('./routes/cinema');
const showtimeRouter = require('./routes/showtime');
const reservationRouter = require('./routes/reservation');
const locationRouter = require('./routes/location');

const app = express();
app.disable('x-powered-by');
const port = process.env.PORT || 8080;

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization'
  );

  next();
});
app.use(express.json());
app.use(userRouter);
app.use(movieRouter);
app.use(cinemaRouter);
app.use(showtimeRouter);
app.use(reservationRouter);
app.use(locationRouter);

app.listen(port, () => console.log(`app is running in PORT: ${port}`));

