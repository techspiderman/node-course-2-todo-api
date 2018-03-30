const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/test', (err,client) =>{

	if (err){
		return console.log('Unable to connect');
	}
   console.log('connected');
   const db = client.db('test');
   db.collection('Todos').find({ _id: new ObjectID('5ab54cd10e9ec584307701ee')}).toArray().then ( (docs/count) => {
   	console.log(JSON.stringify(docs/count, undefined, 2));

   }, (err) => {
   	console.log('unable to fetch',err);
   }
    
   	);
	client.close();
} );