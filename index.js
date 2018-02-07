var mongo=require('mongodb').MongoClient;
var express=require('express');
var fs=require('fs'), url="mongodb://127.0.0.1:27017";
var app = express();
//module.exports = url;
var count=0, port=1133, input={
	reg:"",
	pass:"",
	check:false
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
		pass:req.query.password,
		check:false
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
	regis_counter:"",
	date_time:''
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
	try{
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
				try{
				if(result[0].password==input.pass){
					input.check=true;
					console.log('Account collection connected..!');
					res.render(__dirname+"/dashboard.ejs", {
						name:result[0].name, reg_no:result[0].reg_no, email:result[0].email
					});
					Details_On_User();

				}
				else{/*
					console.log('Account connection failed..!');
					res.sendFile(__dirname+'/html/start_page_wrong.html');*/
				}
			}
			catch(error){
				console.log('Account connection failed..!');
			res.sendFile(__dirname+'/html/start_page_wrong.html');
			}
			}
		});

		//console.log("saved at result_database_store ,, see below \n\n"+result_database_store);
		database.close();
		
	
	});
	}
	catch(err){
			console.log('Account connection failed..!');
			res.sendFile(__dirname+'/html/start_page_wrong.html');
		}
}
/*
app.get('/date', function(req, res){
	console.log('Entered date is : ' +req.query.date);
});*/
function Details_On_User(){
	mongo.connect(url, function(err, d){
		var d2= d.db('BH_software');
		d2.collection(input.reg).find({information: "Record"}).toArray(function(err, result){
			//console.log(result);
		});
	});
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
});
app.get('/adminPage', adminFunction);
function adminFunction(req,res){
	/* connecting to database for showing information to the admin */
	mongo.connect(url, function(err, database3){
		var a= database3.db("BH_software");
		a.listCollections().toArray(function(err, r){
			res.render(__dirname +"/embeded-JS/adminPage.ejs",{ rr: r.length, send: r})
		});

		//a.collection()
	});	
}

