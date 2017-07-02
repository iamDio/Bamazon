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
    displayAll();
});

function displayAll() {
		connection.query('SELECT * FROM products', (err,res) => {
			if (err) throw err;

			res.forEach((res) => {
				console.log(`id: ${res.item_id}`);
				console.log(`product name: ${res.product_name}`);
				console.log(`department: ${res.department_name}`);
				console.log(`price: $${res.price}`);
				console.log(`quantity ${res.stock_quantity}`);
				console.log();
			})
		})
	}

const inquiries = function() {
    inquirer
        .prompt([{
            name: 'id',
            type: 'input',
            message: 'Enter the id of the product you wish to buy: '
        }, {
            name: 'quantity',
            type: 'input',
            message: 'Enter desired quantity: ',
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                } else {
                    return false;
                }
            }

        }]).then(function(answer) {

            connection.query('SELECT * FROM products', (err, res) => {
                if (err) throw err;
                //answer is going to be the user input
                //res is the data from the databases

                res.forEach((res) => {
                //shows order information

                    if (res.item_id == answer.id && answer.quantity <= res.stock_quantity) {
                        console.log(`product id: ${answer.id}`); 
                        console.log(`ordered product: ${res.product_name}`);
                        console.log(`units ordered ${answer.quantity}`);
                        console.log('order placed');
                //updates mysql database to reflect user order and shows total cost of purchase order
                        let updatedStock = res.stock_quantity-answer.quantity;
                        let total = answer.quantity * res.price;
                        connection.query('UPDATE products SET ? WHERE ?',
                            [{stock_quantity: updatedStock},{item_id: answer.id}]);
                        console.log(`remaining stock: ${updatedStock}`)
                        console.log(`Total Cost: $${total}`);

                    }else if(answer.id != res.item_id){
                        console.log('Product not found. Please select a different product');
                    }
                    else if (res.item_id == answer.id && answer.quantity > res.stock_quantity) {
                    	console.log('not enough in stock')
                    }
                })
            })
        })

}();

