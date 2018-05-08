const inquirer = require("inquirer"),
        mysql = require("mysql"),
        cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "Bamazon"
    })
          
connection.connect(function(err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadId + "\n");
    readTable();
    // connection.end();

});

function readTable () {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res)
        inquirer.prompt([
            {
                name: "products",
                type: "input",
                message: "Please enter the ID of the product you would like to buy",
                validate: function(value) {
                    if (isNaN(value) === false) {
                      return true;
                    }
                    return false;
                  }
            }
        ]).then(function(answer) {
            console.log("You've selected " + res[answer.products-1].product_name + 
                        ". The price is " + res[answer.products-1].price + " dollars." +
                        " There are " + res[answer.products-1].stock_quantity + " of these available.")
            sellItem(res[answer.products-1])
        })
    })
}

function sellItem (item) {
    inquirer.prompt([
        {
        name: "quantity",
        type: "input",
        message: "How many would you like to buy?",
        validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
    ]).then(function(answers) {
        if (answers.quantity <= item.stock_quantity) {
            var newQuant = item.stock_quantity - answers.quantity
            console.log("You have purchased " + answers.quantity + " " + item.product_name + ".")
            connection.query("UPDATE products SET stock_quantity = " + newQuant + " WHERE item_id = " + item.item_id,
                function (err, result) {
                    if (err) console.log(err);
                    console.log("There are now " + newQuant + " " + item.product_name + " available.")
                })
        }
        else {
            console.log("There are not enough of those to buy.")
        }
        readTable()
        connection.end()
    })
}