// const passport = require('passport');
// const localStrategy = require('passport-local').Strategy;
// const UserModel = require('../models/User');
// const JWTstrategy = require('passport-jwt').Strategy;
// const ExtractJWT = require('passport-jwt').ExtractJwt;
// passport.use(
//     'signup',
//     new localStrategy(
//       function(username, password, done) {
//         User.findOne({ username: username }, function (err, user) {
//           if (err) { return done(err); }
//           if (!user) { return done(null, false); }
//           if (!user.verifyPassword(password)) { return done(null, false); }
//           return done(null, user);
//         });
//       }
//     ));
//   passport.use(
//     'login',
//     new localStrategy(
//       {
//         usernameField: 'email',
//         passwordField: 'password'
//       },
//       async (email, password, done) => {
//         try {
          
//           const user = await UserModel.findOne({email});
  
//           if (!user) {
//             return done(null, false, { message: 'User not found' });
//           }
  
//           const validate = await user.isValidPassword(password);
  
//           if (!validate) {
//             return done(null, false, { message: 'Wrong Password' });
//           }
  
//           return done(null, user, { message: 'Logged in Successfully' });
//         } catch (error) {
//           return done(error);
//         }
//       }
//     )
//   );
//   passport.use(
//     new JWTstrategy(
//       {
//         secretOrKey: 'TOP_SECRET',
//         jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
//       },
//       async (token, done) => {
//         try {
//           return done(null, token.user);
//         } catch (error) {
//           done(error);
//         }
//       }
//     )
//   );