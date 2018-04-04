var mongoose = require('mongoose');
//require('../config/config');

mongoose.Promise = global.Promise;//need to tell mongoose which promise library to use
mongoose.connect(process.env.MONGODB_URI  );

module.exports = {mongoose};