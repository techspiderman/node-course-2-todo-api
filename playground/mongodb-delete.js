const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/test', (err,client) =>{

	if (err){
		return console.log('Unable to connect');
	}
   console.log('connected');
   const db = client.db('test');
   db.collection('Todos').find({ _id: new ObjectID('5ab54cd10e9ec584307701ee')}).toArray().then ( (docs) => {
   	console.log(JSON.stringify(docs, undefined, 2));

   }, (err) => {
   	console.log('unable to fetch',err);
   }
    
   	);

   // db.collection('Todos').deleteOne({text: 'file taxes'}).then((result) => { console.log(result);});
   // db.collection('Todos').deleteMany({text: 'Walk the dog'}).then ((result)=>{console.log(result);});
    db.collection('Todos').findOneAndDelete({_id: new ObjectID('5a906c404c6e5336b22fb8ab')}).then ((result)=>{console.log(result);});
	client.close();
} );