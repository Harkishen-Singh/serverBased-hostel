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
	information:'',
	name:"",
	email:"",
	password:"",
	reg_no:"",
	mobile:"",
	pin:0
};
var startup=0;
app.get('/signup.html', function(req,res){
	res.sendFile(__dirname+"/html/signup.html");
});
app.get('/submit_form', function(req, res){

});
// starting or beginning page below

app.get('/sent', function(req, res){
	input={
		reg:req.query.reg_number,
		pass:req.query.password
	};
	console.log(input);
	database_mongoDB_operations(req, res);
	
	//donot include res.end(); here, since it will cause an error, as the document is rendering, but u ended the process.

});
app.get('/signup_submit', function(req, res){
	var name_combined =  req.query.user_first_name+"_"+req.query.user_second_name;
	signup={
		information:"User Login Information",
		name:name_combined,
		email:req.query.user_email,
		password:req.query.user_password,
		reg_no:req.query.user_reg,
		mobile:req.query.user_mobile,
		pin:req.query.user_pin
	};
	console.log(signup);
	database_mongoDB_creations();
	res.end();

});
var counter={
	regis_counter:""
};
app.get('/entry', admin_page);
function admin_page(req, res){
	res.sendFile(__dirname+"/html/counter.html");
}
app.get('/addRecord', function(req,res){
	counter={
		regis:req.query.counter_regis,
		date_time:req.query.counter_date,

	};
	console.log(counter);
	var insertion={
		information:"Record",
		time: counter.date_time,
		amount: "DEFAULT"
	}
	mongo.connect(url,function(err,d){
		var x=d.db("BH_software");
		try{
			x.collection(counter.regis).insertOne(insertion);
		}
		catch(err){
			console.log('Didnt find the record at the entered regis '+counter.regis);
		}
		d.close();
	});
	admin_page(req, res);
});


// database connecting below
function database_mongoDB_creations(){
	mongo.connect(url, function(err, database){
		var temp = database.db('BH_software');
		temp.collection(signup.reg_no).insertOne(signup, function(err){
			if(err) console.log('Error occured while creating a collection named '+signup.name);
		});
		database.close();
	});
}
// databse to be used while the user logins in it
var result_database_store={
	information:'',
	name:"",
	email:"",
	password:"",
	reg_no:"",
	mobile:"",
	pin:0
};

function database_mongoDB_operations(req, res){
	mongo.connect(url, function(err, database){
		var temp = database.db('BH_software');
		/*var check = temp.getCollectionNames();
		console.log("List of collections below :\n\n"+check);*/
		temp.collection(input.reg).find({information: "User Login Information"}
		).toArray(function(err, result){
			// performing checks below

			if(err) console.log('Error occured while searching a colllection');

			else{
				console.log('Checking...');
				//console.log(result[0].password);
				//console.log(input.pass);
				if(result[0].password==input.pass){
					console.log('Account collection connected..!');
					res.render(__dirname+"/dashboard.ejs", {
						name:result[0].name, reg_no:result[0].reg_no, email:result[0].email
					});

				}
				else{
					console.log('Account connection failed..!');
				}
				//console.log(result);
			}
		});
		//console.log("saved at result_database_store ,, see below \n\n"+result_database_store);
		database.close();
	});
}
function personal_head(){
	mongo.connect(url, function(err, database2){
		var x=database2.db("BH_software");
		x.collection(input.reg).find({information: "User Login Information"}).toArray(function(err, result2){

		})
	})
}

var cache= 0;
app.get('/', function(req, res){
	res.sendFile(__dirname+'/html/start_page.html');
	count++;
	console.log('user request number : '+ count);
});
var server=app.listen(port, '0.0.0.0',function(){
	console.log("Server running at address "+server.address().address);
	console.log('port '+server.address().port);
	console.log('host '+server.address().host);
});
app.get('/adminPage', adminFunction);
function adminFunction(req,res){
	/* connecting to database for showing information to the admin */
	mongo.connect(url, function(err, database){
		var a= database.db("BH_software");
		a.listCollections().toArray(function(err, r){
			for(var i=0; i<r.length;i++)
			console.log(r[i].name);
			console.log(r.length);
			res.render(__dirname +"/embeded-JS/adminPage.ejs", {rr: r.length});
		});

		//a.collection()
	});	
}