// const { response } = require('express')
// // const User = require('../models/User')
// const user=require('../models/User')
// const index=(req,res,next)=>{
//     user.find()
//     .then(response=>{
//         res.json({response})
//     })
//     .catch(error=>{res.json({message:'An error  Occured'})
// })

// }
// const show=(req,res,next)=>{
//     let userId=req.body.__id

//     user.findById(userId)
//     .then(response=>{
//         res.json({response})
//     })
//     .catch(error=>{res.json({message:'An error  Occured'})
// })

// }
// const store=(req,res,next)=>{
//     let user=new User({
//         name:req.body.name,
//         email:req.body.email,
//         password:req.body.password,
//     })

//     user.save()
//     .then(response=>{
//         res.json({message:'user added'})
//     })
//     .catch(error=>{res.json({message:'An error  Occured'})
// })

// }

// const update=(req,res,next)=>{
//     let UserId=req.body.__id
//     let updatedData={
//         name:req.body.name,
//         email:req.body.email,
//         password:req.body.email 
//     }
//     user.findByIdAndUpdate(UserId,{$set:updatedData})
//     .then(()=>{
//         res.json({
//             message: "employee updated successfully"
//         })
//     })
//     .catch(error=>{
//         res.json({
//             message:"An error occurred"
//         })
//     })
// }
// const destroy=(req,res,next)=>{
//     let UserId=req.body.__id
//     user.findOneAndRemove(UserId)
//     .then(()=>{
//         res.json({
//             message:"employee deleted successfully"
//         })
//     })
//     .catch(error=>{
//         res.json({
//             message:"an error occurred"
//         })
//     })
// }
// module.exports={
//     index,show,store,update,destroy

// }