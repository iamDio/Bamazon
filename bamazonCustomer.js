const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'root',
	database: 'Bamazon'
})

connection.connect((err)=> {
	 if (err) throw err;
	console.log(`Connected as id: ${connection.threadId}`);
	start();
});

const start = function(){
	inquirer
		.prompt([
		{
			name: 'id',
			type: 'input',
			message: 'Enter the id of the product you wish to buy: '
		},
		{
			name: 'quantity',
			type: 'input',
			message: 'Enter desired quantity: '
		}
	])
}