import { v2 as cloudinary } from 'cloudinary';


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true

});


export async function uploadImage(filepath){
    return await cloudinary.uploader.upload(filepath, {
        folder: 'users' // crear carpeta en cloudinary
    });
}

export async function deleteImage(publicId) {
    return await cloudinary.uploader.destroy(publicId);
    
}

//