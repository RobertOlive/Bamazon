DROP DATABASE IF EXISTS Bamazon;
CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT ,
    product_name VARCHAR (255) NOT NULL,
    department_name VARCHAR (255) NOT NULL,
    price DECIMAL (10, 2) NOT NULL,
    stock_quantity INT (10),
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("lego set", "Toys", 20.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cell Phone charger", "Electronics", 15.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yeti cooler", "Kitchen", 150.00, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Peanut Butter", "Food", 2.99, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Baseball Bat", "Sports", 35.00, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Socks", "Clothing", 5.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paper Towels", "Cleaning Products", 3.00, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Beach Towel", "Linens", 8.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rubbermaid Container", "Home goods", 7.99, 14);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Knife set", "Kitchen", 25.00, 7);