const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'bamazon'
})

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected as id: ${connection.threadId}`);
});


const inquiries = function() {
    inquirer
        .prompt([{
            name: 'options',
            type: 'list',
            message: 'Manager mode: ',
            choices: [
            	'View Products for Sale',
            	'View Low Inventory',
            	'Add to Inventory',
            	'Add New Product'
            ]
        }]); 
    }();