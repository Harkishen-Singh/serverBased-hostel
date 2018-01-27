var mongo=require('mongodb').MongoClient;
var express=require('express');
var fs=require('fs'), url="mongodb://127.0.0.1:27017";
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

// signup form below
var signup={
	name:"",
	email:"",
	password:"",
	reg_no:"",
	mobile:"",
	pin:0
};
var startup=0;
app.get('/signup.html', function(req,res){
	res.sendFile(__dirname+"/signup.html");
});
app.get('/submit_form', function(req, res){

})
// starting or beginning page below

app.get('/sent', function(req, res){
	input={
		reg:req.query.reg_number,
		pass:req.query.password
	};
	console.log(input);
	res.end();
});
app.get('/signup_submit', function(req, res){
	signup={
		name:req.query.user_name,
		email:req.query.user_email,
		password:req.query.user_password,
		reg_no:req.query.user_reg,
		mobile:req.query.user_mobile,
		pin:req.query.user_pin
	};
	console.log(signup);

});

// database connecting below
function database_mongoDB_operations(){
	mongo.connect(url, function(err, database){

	});
}
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
