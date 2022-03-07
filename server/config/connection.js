const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Trail-Talk', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  if(err) throw err;
  console.log('Connected to MongoDB!!!')
});

module.exports = mongoose.connection;
