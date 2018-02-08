var mongo=require('mongodb').MongoClient;
var url='mongodb://127.0.0.1:27017/BH_software';

var obj= {
	information: 'Record',
	time: '',
	date: '',
	status: 'NA',
	amount: 'DEFAULT'
}
function init(regis) {
	mongo.connect(url, function(e,d) {
		for(var i=1; i<=31;i++) { // initialsing the days in that present month to NA status 
			obj.date = i.toString();
			d.collection(regis).insertOne(obj);
		}
	});
}