var mongo=require('mongodb').MongoClient;
var express=require('express');
var fs=require('fs');
var app = express();
var count=0, port=1133, input={
	reg:"",
	pass:""
};
/*
var request=require('request'), obj={reg:"", pass:""};
request({
	url:"http://0.0.0.0:1133/sent",
	method:"POST",
	json:true,
	body:obj
}, function(err, res, body){
	console.log(res);
});*/

var startup=0;

app.get('/sent', function(req, res){
	input={
		reg:req.query.reg_number,
		pass:req.query.password
	};
	console.log(input);
	res.end();
});

var cache= 0;
app.get('/', function(req, res){
	res.sendFile(__dirname+'/start_page.html');
	count++;
	console.log('user request number : '+ count);
});
var server=app.listen(port, '0.0.0.0',function(){
	console.log("Server running at address "+server.address().address);
	console.log('port '+server.address().port);
	console.log('host '+server.address().host);
})
