var mongo=require('mongodb').MongoClient;
var url='mongodb://127.0.0.1:27017';
/*
var obj= {
	information: 'Record',
	time : '',
	date: '',
	status: 'NA',
	amount: 'DEFAULT'
}*/
var objMany =[{
	information: 'Record',
	count: 1,
	time : '',
	date: '01',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 2,
	time : '',
	date: '02',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 3,
	time : '',
	date: '03',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 4,
	time : '',
	date: '04',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 5,
	time : '',
	date: '05',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 6,
	time : '',
	date: '06',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 7,
	time : '',
	date: '07',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 8,
	time : '',
	date: '08',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 9,
	time : '',
	date: '09',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 10,
	time : '',
	date: '10',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 11,
	time : '',
	date: '11',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 12,
	time : '',
	date: '12',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 13,
	time : '',
	date: '13',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 14,
	time : '',
	date: '14',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 15,
	time : '',
	date: '15',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 16,
	time : '',
	date: '16',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 17,
	time : '',
	date: '17',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 18,
	time : '',
	date: '18',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 19,
	time : '',
	date: '19',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 20,
	time : '',
	date: '20',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 21,
	time : '',
	date: '21',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 22,
	time : '',
	date: '22',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 23,
	time : '',
	date: '23',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 24,
	time : '',
	date: '24',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 25,
	time : '',
	date: '25',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 26,
	time : '',
	date: '26',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 27,
	time : '',
	date: '27',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 28,
	time : '',
	date: '28',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 29,
	time : '',
	date: '29',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 30,
	time : '',
	date: '30',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
},{
	information: 'Record',
	count: 31,
	time : '',
	date: '31',
	month: '',
	status: 'NA',
	amount: 'DEFAULT'
}];
function init(regis, month2) {
	mongo.connect(url, function(e,d) {
		var x= d.db('BH_software');
		// month assignment below
		for(var i=1;i<=30; i++) {
			objMany[i].month= month2;

		}
		x.collection(regis).insertMany(objMany);
	});
}
module.exports = init ;