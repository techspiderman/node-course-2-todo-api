var mymongoose1 = require('./db/mongoose');

var Todo = require('./models/todo');
var User = require('./models/user');

var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.json());

app.post('/todos', (req,res)=>{
	var todo = new Todo({text:req.body.text});
	todo.save().then((doc)=>{res.send(doc);},(e)=>{res.status(400).send(e); });
	console.log(req.body);});

app.get('/todos', (req,res)=> {
	Todo.find().then((todos)=>{
		res.send ({todos});//good to send object so that you can add more properties later
	}, (err)=>{res.status(400).send(e);
	});
});

app.listen(3000,() => {console.log('starting app');});

