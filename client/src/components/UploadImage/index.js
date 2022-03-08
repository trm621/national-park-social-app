import React, { useState } from "react";


function UploadImage() {
  // sets up the image to be blank when entering screen
  const [baseImage, setbaseImage] = useState("");
  
  // the event when click upload file creates a large output, we will pull just the area with key file info
  const uploadImage = async (e) => {
  const file = e.target.files[0];
  // the uploaded file will be converted to Base64 in order to be saved to MONGO
  const base64 = await convertBase64(file);
  // that will set the baseImage as the coverted file
  console.log(base64);
  // left this in to show what the base64 will look like in database
      // may need to take off everything before comma? 
      // if so, use .splt(",")[1] 
  setbaseImage(base64)
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) =>{
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  

  return (
    <div className="imageupload">
      <input type="file" onChange={(e) => {
        uploadImage(e);
      }}
      />
     <br></br>
      <img src={baseImage} height = "200px" alt="postphoto"/>
    </div>
  );
}

export default UploadImage;