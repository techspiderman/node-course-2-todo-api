require('./config/config');

var {mymongoose} = require('./db/mongoose');
const {ObjectID} = require('mongodb');
const Lodash = require('lodash');
var Todo = require('./models/todo');
var User = require('./models/user');

var express = require('express');
var bodyparser = require('body-parser');


var app = express();



const port = process.env.PORT ;


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

app.get('/todos/:id',(req,res)=>{
	var id = req.params.id;

	if(!ObjectID.isValid(id))
	{
		return res.status(404).send();
	}

	Todo.findById(id).then((todo)=>{
		if(!todo)
		{
			returnres.status(404).send();
		}
		
		res.status(200).send({todo});
	
	}
	).catch((e)=>{res.status(400).send(e);});	

} );

app.delete('/todos/:id',(req,res)=>{
	var id = req.params.id;

	if(!ObjectID.isValid(id))
	{
		return res.status(404).send();
	}

	Todo.findByIdAndRemove(id).then((todo)=>{
		if(!todo)
		{
			return res.status(404).send();
		}
		
		res.status(200).send({todo});
	
	}
	).catch((e)=>{res.status(400).send(e);});	

} );

app.patch('/todos/:id', (req,res)=>{
	var id = req.params.id;
	var body = Lodash.pick(req.body, ['text'], ['completed']);
	if(!ObjectID.isValid(id))
	{
		return res.status(404).send();
	}

	if (Lodash.isBoolean(body.completed) && body.completed)
	{
		body.completedAt = new Date().getTime(); //
		
	}
	else
	{
		body.completed = false;
		body.completedAt = null;
	}
	Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
		if (!todo){
			return res.status(404).send();
		}
		res.send({todo});
	}).catch((e)=>{
		res.status(400).send(e);
	});

});
app.listen(port,() => {console.log(`starting app at port:${port}`);});

