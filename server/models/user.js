var mongoose = require('mongoose');

var User = mongoose.model('User',{
	email:
	{
		type:String,
		required:true,
		trip:true,
		minlength:1
	}

});

module.exports = {user:User};