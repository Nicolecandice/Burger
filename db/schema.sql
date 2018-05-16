CREATE DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger(
    ID AUTO INCREMENT INT PRIMARY KEY,
    burger_name VARCHAR (30),
    devoured BOOLEAN NOT NULL
);