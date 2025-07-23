import {v2 as cloudinary} from 'cloudinary'
import fs from "fs"

//story after u get a local file then u can
//  do all this 



  cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_SECRET, 
        api_secret: process.env.CLOUDINARY_API_KEY // Click 'View API Keys' above to copy your API secret
    });


const uploadOnCloud = async (localFilePath)=>{
  //async func take file from multer where he saved
  try {
    if(!localFilePath) return null
    const response = await cloudinary.uploader.upload
    (localFilePath,{
      resource_type:"auto"})

    //file has been uploaded successful
  console.log("file is upload on cloudinary",response.url);

  return response;
    
    
  } catch (error) {
  fs.unlinkSync(localFilePath)
//remove the locally saved temporary file as the upload
//operation got failed 
  return null
  }
}

export {uploadOnCloud}