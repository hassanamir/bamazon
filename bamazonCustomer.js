var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "",
    database: "bamazon_db"
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

var query = "SELECT * FROM products";
connection.query(query, function (err, res, fields) {
    if (err) throw err;
    console.log(res);
    var choiceArray = [];
    for (var i = 0; i < res.length; i++) {
        choiceArray.push(results[i].item_name);
    }
    postQuestion();
});
function postQuestion() {
    // i guess i could figure how to set up the prop for user imput but i have my all data working fine
    inquirer
        .prompt([
            {
                name: "Item_id",
                type: "rawlist",
                message: " ID of the product would like to buy?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
        
            {
                name: "stock_quantity",
                type: "input",
                message: " how many units of the product would like to buy?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function (answer) {
            connection.query(
                {
                    item_name: answer.item,
                    product_name: answer.product_name,
                    price: answer.price,
                    department_name: answer.department_name,
                    stock_quantity: answer.stock_quantity
                },
                function (err) {
                    if (err) throw err;
                    console.log("Insufficient quantity!");
                    start();
                }
            );
        });
    }
