const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/test', (err,client) => {
	if(err){
		return console.log('unable to connect to db');

	}
console.log('connected to db');
	const db = client.db("test");
	db.collection("Users").insertOne({name:'Ak',age:22, location:'planet earth'}, (err, result) => {
		if (err)
		{
			return console.log('unable to insert', err);
		}
		console.log(JSON.stringify(result.ops,undefined,2));
		console.log(JSON.stringify(result.result,undefined,2));
		console.log(JSON.stringify(result.result.n,undefined,2));

	} );

	client.close();
	});
	// db.collection('Todos').insertOne ({
	// 	text: 'something to do',
	// 	completed: false
	// }, (err, result)=>{
	// 	if ()
	// });

	
	



