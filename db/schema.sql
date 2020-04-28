DROP DATABASE IF EXISTS employees_DB;
CREATE DATABASE employees_DB;

USE employees_DB;

CREATE TABLE department(
department_id INT NOT NULL,
name VARCHAR(45),
PRIMARY KEY(department_id)

);

CREATE TABLE role(
role_id INT NOT NULL DEFAULT 4,
title VARCHAR(45),
salary DECIMAL(10,2),
department_id INT NOT NULL,
KEY(role_id)
);

CREATE TABLE employee(
employee_id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(45),
last_name VARCHAR(45),
role_id INT NOT NULL,
manager_id INT,
KEY(employee_id)
);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;