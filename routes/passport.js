const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const opts={}
const passport=require('passport');
// const JwtStrategy = require('passport-jwt/lib/strategy');
// const { Passport } = require('passport/lib');
const UserModel=require('../models/User')
opts.jwtFromRequest=ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey='TOP_SECRET';
passport.use(new JwtStrategy(opts,function(jwt_payload,done){
    console.log(jwt_payload)
    UserModel.findOne({id:jwt_payload.id},function(err,user){
      
        if(err){
            return done(err,false)
        }
        if(user){
            return done(null,user)
        }
        else{
            return done(null,false)
        }
    });
}));