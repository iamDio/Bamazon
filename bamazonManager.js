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
    inquiries();
});


function inquiries() {
    inquirer
        .prompt({
            name: 'options',
            type: 'list',
            message: 'Manager mode: ',
            choices: [
                'View Products for Sale',
                'View Low Inventory',
                'Add to Inventory',
                'Add New Product'
            ],
        })
        .then((answer) => {
            switch (answer.options) {
                case 'View Products for Sale':
                    productsForSale();
                    break;
                case 'View Low Inventory':
                    viewLowInventory();
                    break;
                case 'Add to Inventory':
                    addToInventory();
                    break;
                case 'Add New Product':
                    addNewProduct();
                    break;
            }
        });
};

function productsForSale() {
    connection.query('SELECT * FROM products', (err, res) => {
        if (err) throw err;
        res.forEach((res) => {
            console.log(`id: ${res.item_id}`);
            console.log(`product name: ${res.product_name}`);
            console.log(`department: ${res.department_name}`);
            console.log(`price: $${res.price}`);
            console.log(`quantity ${res.stock_quantity}`);
            console.log();
        })
        inquiries();
    })
};


function viewLowInventory() {
    //If a manager selects View Low Inventory, then it should list all items with a inventory count lower than five.
    connection.query('SELECT * FROM products', (err, res) => {
        if (err) throw err;
        
        res.forEach((res) => {
            if (res.stock_quantity < 5) {
                console.log(`product name: ${res.product_name}`);
                console.log(`quantity ${res.stock_quantity}`);
                console.log();
            }
        })
        inquiries();
    })
}

function addToInventory() {
    //If a manager selects Add to Inventory, your app should display a prompt that will let the manager "add more" of any item currently in the store.
}

function addNewProduct() {
    //If a manager selects Add New Product, it should allow the manager to add a completely new product to the store.
}
