import User from '../models/User.js'

// ====================== Create new User
 export const createUser = async(req,res)=>{
    const newUser = new User(req.body)
    try{
        const savedUser = await newUser.save()
        res.status(200)
        .json(
            {success:true,
            message:"Successful created",
            data:savedUser
            })
    }
    catch(err){
        res.status(500).json({success:false,
            message:"Failed to create, Try again"})
    }
}


// ===================== Update User
export const updateUser = async(req,res)=>{
    const id = req.params.id
    try{
        const updateUser = await User.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})
        res.status(200)
        .json(
            {success:true,
            message:"Successful Updated",
            data:updateUser
            })
    }
    catch(err){
        res.status(500)
        .json(
            {success:false,
            message:"Failed to update",
            })
    }
}
// ===================== Delete User
export const deleteUser = async(req,res)=>{
    const id = req.params.id
    try{
        const deleteUser = await User.findByIdAndDelete(id,{
            $set:req.body
        },{new:true})
        res.status(200)
        .json(
            {success:true,
            message:"Successful Deleted",
            })
    }
    catch(err){
        res.status(500)
        .json(
            {success:false,
            message:"Failed to Delete",
            })
    }
}
// ===================== Get SIngle User
export const getSingleUser = async(req,res)=>{
    const id = req.params.id
    try{
        const user = await User.findById(id)
        res.status(200)
        .json(
            {success:true,
            message:"Successful Get the data",
            data:user
            })
    }
    catch(err){
        res.status(404)
        .json(
            {success:false,
            message:"Failed to Found",
            })
    }
}
// ===================== Get All User
export const getAllUser = async(req,res)=>{


    try{
        const users = await User.find({})
        res.status(200)
        .json(
            {success:true,
            message:"Successful",
            data:users
            })
    }
    catch(err){
        res.status(404)
        .json(
            {success:false,
            message:"Failed to Found",
            })
    }
}