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
                type: "input",
                name: "products",
                message: "Please enter the ID of the product you would like to buy"
            }
        ]).then(
            console.log(answer)
        )
    })
}

