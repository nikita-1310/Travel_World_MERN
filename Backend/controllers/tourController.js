import Tour from '../models/Tour.js'

// ====================== Create new tour
 export const createTour = async(req,res)=>{
    const newTour = new Tour(req.body)
    try{
        const savedTour = await newTour.save()
        res.status(200)
        .json(
            {success:true,
            message:"Successful created",
            data:savedTour
            })
    }
    catch(err){
        res.status(500).json({success:false,
            message:"Failed to create, Try again"})
    }
}


// ===================== Update tour
export const updateTour = async(req,res)=>{
    const id = req.params.id
    try{
        const updateTour = await Tour.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})
        res.status(200)
        .json(
            {success:true,
            message:"Successful Updated",
            data:updateTour
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
// ===================== Delete tour
export const deleteTour = async(req,res)=>{
    const id = req.params.id
    try{
        const deleteTour = await Tour.findByIdAndDelete(id,{
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
// ===================== Get SIngle tour
export const getSingleTour = async(req,res)=>{
    const id = req.params.id
    try{
        const tour = await Tour.findById(id).populate("reviews")
        res.status(200)
        .json(
            {success:true,
            message:"Successful Get the data",
            data:tour
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
// ===================== Get All tour
export const getAllTour = async(req,res)=>{

    // for pagination
    const page= parseInt(req.query.page)
    console.log(page);

    try{
        const tours = await Tour.find({}).populate("reviews").skip(page * 8).limit(8)
        res.status(200)
        .json(
            {success:true,
            count : tours.length, 
            message:"Successful",
            data:tours
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

// get tour by search
export const getTourBySearch = async(req,res)=>{
    const city = new RegExp(req.query.city,'i')// i means case sensitive
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)
    try{
        const tours = await Tour.find({city, distance:{$gte:distance},
        maxGroupSize:{$gte:maxGroupSize}})
        .populate("reviews")
        res.status(200)
        .json(
            {success:true,
            message:"Successful",
            data:tours
            })

    }
    catch(err){
        res.status(404)
        .json(
            {success:false,
            message:"Failed to found",
            })
    }

}


// get featured tour
export const getFeaturedTour = async(req,res)=>{
    try{
        const tours = await Tour.find({featured:true}).populate("reviews").limit(8);
        res.status(200)
        .json(
            {success:true,
            message:"Successful",
            data:tours
            })
    }
    catch(err){
        res.status(500)
        .json(
            {success:false,
            message:"Failed tofound",
            })
    }
}


// Get tour counts
export const getTourCount = async(req,res)=>{
    try{
        const tourCount = await Tour.estimateDocumentCount()
        res.status(200).json({success:true, data:tourCount})
    }
    catch(err){
        res.status(500).json({success:false, message:"Failed to fetch"})
    }
}