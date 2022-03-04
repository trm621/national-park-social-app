var mongoose = require('mongoose');
  
var imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
// Important that data type for image is Buffer which allows us to store image as data in the form of arrays
 
//Image is a model which has a schema imageSchema
  
module.exports = new mongoose.model('Image', imageSchema);