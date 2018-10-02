DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INTEGER (10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NULL,
  price VARCHAR (10) NULL,
  department_name VARCHAR (50) NOT NULL,
  stock_quantity INTEGER (60) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, price, department_name, stock_quantity)
VALUES("Macbook air ", "Apple", "cali", 10), 
("Coding", "Bootcamp", "GW" , 28), 
("Book", "Javascipt" ,  "Boston" , 10),
("Macbook Pro ", "Apple", "Arlington", 50), 
("Chese", "Food", "Triangle", 11), 
("Pasta", "Food" , "WoodBrige" , 23),
("Tesla ", "Car", "Dale",  2 ), 
("Dell", "Computer", "Alexenderia" , 9), 
("Coke", "Drink" , "Florida", 30),
("Samsung", "Android" , "springfile", 2);
SELECT * FROM products