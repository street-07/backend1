const asyncHandler=()=>{
    (req,res,next)=>{
        Promise.resolve().catch((err)=> next(err))
    }
}


export{asyncHandler}


//2nd approach
// const asyncHandler =()=>{}
// const asyncHandler =(func)=>()=>{}
// const asyncHandler =(func)=>async()=>{}


// const asyncHandler =(func)=>(req,res,next)=>{
//     try {
//         await func(req,res,next)
//     } catch (error) {
//         res.status(err.code||500).json({
//             success:false,
//             message:err.message
//         })
        
//     }
// }
