var mongo=require('mongodb').MongoClient;
var express=require('express');
var web=express();

function UserDetails(reg){
	mongo.connect(url, function(e, d){
		var data = d.db("BH_software");
		data.collection(reg).find({information: 'Record'}).toArray(function(err, result){
			
		});
	});
}
