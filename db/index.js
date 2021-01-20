const config = require('../config');
const mongoose = require('mongoose');


if( !mongoose.Types.ObjectId.isValid(id) ) return false;

require('./models/portfolio');

exports.connect = () => {
  return mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }, (err) => {
    if (err) { console.error(err); }
    else {
      console.log('Connected to DB!');
    }
  })
}