import React, { useState } from "react";
import {
  Container,
  Box,
  Input,
  FormControl,
  Badge, VStack
} from "@chakra-ui/react";
// TO DO: Add Conditional Logic so upload photo only shows when one does not exist
// TO DO: Add Photo to Avatar Logic

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
    setbaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
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
    <VStack p={4}>
    <Container maxW='container.md'>
      <div>
      <Badge colorScheme='green' p='4' m='4' borderRadius='lg'>
        Upload your Profile Photo
      </Badge>
        <form>
          <FormControl>
            <Input
              type="file"
              placeholder="yourbestphot.png"
              onChange={(e) => {
                uploadImage(e);
              }}
            />
          </FormControl>
        </form>
        <Box>
          <br></br>
          <img src={baseImage} height="200px" alt="postphoto" />
        </Box>
      </div>
    </Container>
      </VStack>

  );
}

export default UploadImage;
