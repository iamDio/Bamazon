<h1>SERVER SIDE SHOPPER</h1>

**NOTE: This application was built using JavaScript, Node.js, and MySql. Refer to the package.json file for a list of dependencies. 


Bamazon is a server side application which allows the user to interact with a MySql database using a Node.js CLI. The user has a choice from 2 modes: customer, or manager. 

<h2>CUSTOMER MODE:</h2>

<p>  User can "purchase" items in a database. If the quantity the user selects is greater than what is available, they will be notified, otherwise they will receive confirmation that the purchase was successful. The database will then be updated automatically to reflect the purchased amount. The customer has the option to view all the items available and the quantity in stock before making a purchase. </p>
  
<h2>MANAGER MODE:</h2>

<p>  The "manager" has the ability to view all the items in the database, and add new items available for sale. The manager also has the ability to update the quantity of items in stock for existing products in the database. </p>

<h2> HOW TO RUN </h2>
  <ol>
  <li>Open terminal/command line and git clone https://github.com/iamDio/Server-Side-Shopper.git </li>
  <li>node server.js </li>
  <li>Running server.js will present the user with a list of all the items in the database. Decided which one to purchase by using the product id. </li>
  <li> Select quantity you wish to purchase and confirm your order. This will show you the Total Cost, and the remaining amount of items in stock. </li>  
![bamazon](https://user-images.githubusercontent.com/19352823/31102827-d3888280-a7a1-11e7-95e8-3f4f362ea636.gif)

