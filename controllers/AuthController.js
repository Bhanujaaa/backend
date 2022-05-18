// const User=require('../models/User')
// const bcrypt=require('bcrypt')
// const register=(req,res,next)=>{
//     bcrypt.hash(req.body.password,10,function(err,hashedpass){
//         if(err){
//             res.json({
//                 error:err
//             })
//         }
//     })
//     let user=new User({
//         name:req.body.name,
//         email:req.body.email,
//         password:req.body.password
//     })
//     user.save
// } 