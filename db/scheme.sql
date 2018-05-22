-- Schema

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE devoured
(
    id int NOT NULL AUTO_INCREMENT,
    burger varchar(255) NOT NULL,
    PRIMARY KEY (id)
);