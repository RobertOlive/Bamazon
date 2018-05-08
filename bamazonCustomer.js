const inquirer = require("inquirer"),
        mysql = require("mysql");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "Bamazon"
});
          
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    readTable();
    connection.end();

});

function readTable () {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
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
            console.log("You've selected " + res[answer.products].product_name + 
                        ". The price is " + res[answer.products].price + " dollars.")
            sellItem(res[answer.products].product_name)
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
        console.log("You have purchased " + answers.quantity + " " + item + ".")
    })
}