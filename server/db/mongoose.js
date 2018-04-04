var mongoose = require('mongoose');

mongoose.Promise = global.Promise;//need to tell mongoose which promise library to use
mongoose.connect(process.eng.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};